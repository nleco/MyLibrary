import React, { PropTypes } from 'react';

import './FooterView.scss';

const FooterView = () => (
    <footer className="app__footer">
        <p>SampleCompany {(new Date).getFullYear()}</p>
    </footer>
);

export default FooterView;