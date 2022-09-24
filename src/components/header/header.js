import React from 'react';

const Header = (props) => {
return (
    <header>
        <div className="header">{props.title}</div>
    </header>
    );
};

export default Header;