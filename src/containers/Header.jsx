import React from 'react';
import { connect } from 'react-redux';

import HeaderView from '../scenes/HeaderView';
import { updatePage } from '../actions';

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: (page) => {
            dispatch(updatePage(page));
        }
    }
}

const Header = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderView);

export default Header;