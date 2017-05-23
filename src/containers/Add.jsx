import { connect } from 'react-redux';
import { addBook } from '../actions';

import AddView from '../scenes/AddView';

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBookSubmit : (book) => {
            dispatch(addBook(book));
        }
    }
};

const Add = connect(
    null,
    mapDispatchToProps
)(AddView);

export default Add;