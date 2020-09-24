import React from 'react';
import { NavLink } from 'react-router-dom';
import HomepageStripHorizontal from '../../../utils/HomepageStripHorizontal/horizontal';
import IsLogged from '../isLoggin/isLogin';

const HomepageHeader = () => (
    <>
        <header className="header">
            <NavLink to="/movies"><button className="header-title"><b>Movies</b></button></NavLink>
            <HomepageStripHorizontal />
        </header>
        <IsLogged />
    </>
);

export default HomepageHeader;