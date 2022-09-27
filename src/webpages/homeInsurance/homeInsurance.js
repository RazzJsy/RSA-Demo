import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { addItemToArrayObjects, getSumAddonValueFromArray } from '../../functions/dataArray';
import { floatWithDecimalPlace } from '../../functions/numbers';

import Quote from '../../components/quote/quote'
import AddOn from '../../components/addon/addon'

const HomeInsurance = ({title}) => {
    const { setTitle } = useOutletContext();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMonthly, setIsMonthly] = useState(true);
    const [quoteItems, setQuoteItems] = useState([]);
    const [quotePrice, setQuotePrice] = useState(0);
    const [addonItems, setAddonItems] = useState([]);

    function calculateQuotePrice() {
      let price = isMonthly ? quoteItems.monthlyPrice : quoteItems.annualPrice;
      let addonValue = getSumAddonValueFromArray(addonItems, isMonthly);
      setQuotePrice(floatWithDecimalPlace((addonValue + price), 2));
    }

    const quoteClick = (resp) => {
      setIsMonthly(resp);
      setQuotePrice(isMonthly ? quoteItems.annualPrice : quoteItems.monthlyPrice);
    }

    const addonClick = (index) => {
      addonItems[index].isSelected = !addonItems[index].isSelected;
      setAddonItems(addonItems);
      calculateQuotePrice();
    }
    
    useEffect(() => {
      setTitle(title)
      
      let quoteApiRequest = fetch('http://localhost:3002/quote');
      let addonApiRequest = fetch('http://localhost:3002/addons');
      
      Promise.all([quoteApiRequest, addonApiRequest])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(    
        (result) => {
            if (result[0].length === 1)
            {
              setQuoteItems(result[0][0]);
            }
            setAddonItems(addItemToArrayObjects(result[1], 'isSelected', false));
            setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }, [title, setTitle]);

    useEffect(() => {
      calculateQuotePrice();
    });

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className='quote-wrapper'>
            <Quote props={quoteItems} price={quotePrice} isMonthly={isMonthly} onClick={quoteClick} />
          </div>
          <h2>Tailor your cover with our optional extras</h2>
          <div className='addon-wrapper'>
            {addonItems.map((item, index) => (
                <AddOn key={index} props={item} index={index} isMonthly={isMonthly} isSelected={item.isSelected} onClick={addonClick} />
            ))}
          </div>
        </React.Fragment>
      );
    }
};

export default HomeInsurance;