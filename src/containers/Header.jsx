import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import HeaderView from '../scenes/HeaderView';
import { updatePage } from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage: (page) => {
            dispatch(updatePage(page));
        }
    }
}

const Header = connect(
    null,
    mapDispatchToProps
)(HeaderView);

export default withRouter(Header);