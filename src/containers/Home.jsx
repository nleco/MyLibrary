import { connect } from 'react-redux';
import { updatePage } from '../actions';

import HomeView from '../scenes/HomeView'

const mapStateToProps = (state) => {
    return {
        books : state.books
    }
};

const mapDispatchToProps = (state) => {
    return {
        onRemoveBookClick : (id) => {
            dispatch(removeBook(id));
        }
    }
};

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);

export default Home;