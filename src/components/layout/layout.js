import React, { useState } from 'react';
import { Outlet } from "react-router-dom";

import Header from '../header/header';

const Layout = () => {
    const [title, setTitle] = useState("");

    return (
    <React.Fragment>
        <div className='main-layout'>
            <Header title={title} />
            <div className='content'>
                <Outlet context={{ setTitle }} />
            </div>
        </div>
    </React.Fragment>
    );
};

export default Layout;