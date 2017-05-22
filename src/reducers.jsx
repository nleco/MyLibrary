import { combineReducers } from 'redux';


// Page
const page = (state={}, action) => {
    
    switch (action.type) {
        case 'UPDATE_PAGE':
            return {
                page: action.page
            }
        case default:
            return state;
    }
    return state;
};

// Books
const books = () = (state = [], action) {
    switch (action) {
        case ADD_BOOK:
            return [
                ...state,
                
                
            ];
        case REMOVE_BOOK:
            return [];
        default:
            return state;
    }
}



const libraryApp = combineReducers({
    page,
    books
})

export default library;