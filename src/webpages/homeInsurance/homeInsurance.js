import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import Quote from '../../components/quote/quote'
import AddOn from '../../components/addon/addon'

const HomeInsurance = ({title}) => {
    const { setTitle } = useOutletContext();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [quoteItems, setQuoteItems] = useState([]);
    const [addonItems, setAddonItems] = useState([]);
    
    useEffect(() => {
      setTitle(title)
      let quoteApiRequest = fetch('http://localhost:3000/quote');
      let addonApiRequest = fetch('http://localhost:3000/addons');
      Promise.all([quoteApiRequest, addonApiRequest])
      .then(values => Promise.all(values.map(value => value.json())))
      .then(    
        (result) => {
            if (result[0].length === 1)
            {
              setQuoteItems(result[0]);
            }
            setAddonItems(result[1]);
            setIsLoaded(true);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
    }, [title, setTitle]);

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className='quote-wrapper'>
            <Quote props={quoteItems[0]} />
          </div>
          <h2>Tailor your cover with our optional extras</h2>
          <div className='addon-wrapper'>
            {addonItems.map((item, index) => (
                <AddOn key={index} props={item} index={index} />
            ))}
          </div>
        </React.Fragment>
      );
    }
};

export default HomeInsurance;