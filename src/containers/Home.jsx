import { connect } from 'react-redux';
import { updatePage, removeBook } from '../actions';

import HomeView from '../scenes/HomeView';

const mapStateToProps = (state) => {
    return {
        books : state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemoveBook : (id) => {
            dispatch(removeBook(id));
        },
        handleChangePage: (page) => {
            dispatch(updatePage(page));
        }
    }
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);

export default Home;