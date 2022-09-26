import React from 'react';

const AddOn = ({props, index, isMonthly, isSelected, onClick}) => {
return (
    <React.Fragment>
        <div className='addon-container'>
            <div className='addon-grid'>
                <div>
                    <h3>{props.title}</h3>
                </div>
                <div className='addon-price'>
                    £{isMonthly ? props.monthlyPrice + ' per month' : props.annualPrice + ' per year'}
                </div>
            </div>
            <div className='addon-text'>
                {props.text}
            </div>
            <button type="button" className={isSelected ? 'selected' : ''} onClick={() => onClick(index)}>{isSelected ? 'Deselect' : 'Select'} this extra</button>
        </div>
    </React.Fragment>
    );
};

export default AddOn;