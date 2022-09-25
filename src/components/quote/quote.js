import React from 'react';
import { concatAddress } from '../../functions/addresses';
import { localDate } from '../../functions/dates';

const Quote = ({props}) => {
return (
    <React.Fragment>
        <div className='quote-container'>
            <div className='quote-grid'>
                <div className='quote-details'>
                    <h2>Hey {props.firstName} {props.lastName},</h2>
                    <div>Here is your quote for {concatAddress([props.address1, props.address2, props.address3, props.town, props.postcode], true)}</div>
                    <div>Quote reference: {props.quoteRef}</div>
                    <div>Cover starts on {localDate(props.startDate)}</div>
                </div>
                <div className='quote-summary'>
                    <h1>£{props.monthlyPrice}</h1>
                    <h2>per month</h2>
                    <div className='quote-summary-text'>This price includes Insurance Premium Tax at the current rate. No charge for paying monthly.</div>
                    <button type="button">Switch to annual</button>
                </div>
            </div>
        </div>
    </React.Fragment>
    );
};

export default Quote;