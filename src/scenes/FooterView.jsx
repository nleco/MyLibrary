import React, { PropTypes } from 'react';

const FooterView = () => (
    <footer className="app__footer">
        <p>SampleCompany {(new Date).getFullYear()}</p>
    </footer>
);

export default FooterView;