import React, {Component} from 'react';
import HomepageStripHorizontal from '../../../utils/HomepageStripHorizontal/horizontal';

export default class Footer extends Component{
    render() {
        return (
            <footer className="footer">
                <HomepageStripHorizontal />
                <h1>EPAM</h1>
            </footer>
        );
    };
};