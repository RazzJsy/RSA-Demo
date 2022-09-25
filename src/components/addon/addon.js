import React from 'react';

const AddOn = ({props, index}) => {
return (
    <React.Fragment>
        <div className='addon-container'>
            <div className='addon-grid'>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div className='addon-price'>
                    £{props.monthlyPrice} per month
                </div>
            </div>
            <div>
                {props.text}
            </div>
            <button type="button">Select this extra</button>
        </div>
    </React.Fragment>
    );
};

export default AddOn;