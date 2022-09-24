import React from 'react';

const AddOn = ({props, index}) => {
return (
    <React.Fragment>
        <div>
            <div className='addonContainer'>
                <div className='parent'>
                    <div>
                        <h3>{props.title}</h3>
                    </div>
                    <div>
                        {props.monthlyPrice}
                    </div>
                </div>
                <div className='both'>
                    {props.text}
                </div>
                <button type="button">Select this extra</button>
            </div>
        </div>
    </React.Fragment>
    );
};

export default AddOn;