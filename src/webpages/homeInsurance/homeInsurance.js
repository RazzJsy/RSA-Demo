import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import AddOn from '../../components/addon/addon'

const HomeInsurance = ({title}) => {
    const { setTitle } = useOutletContext();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        setTitle(title)
        fetch("http://localhost:3000/addons")
          .then(res => res.json())
          .then(
            (result) => {
                setIsLoaded(true);
                setItems(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      });

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <React.Fragment>
            <h2>Tailor your cover with our optional extra</h2>
            <div className='wrapper'>
              {items.map((item, index) => (
                  <AddOn key={index} props={item} index={index} />
              ))}
            </div>
          </React.Fragment>
        );
      }
};

export default HomeInsurance;