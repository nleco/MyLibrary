import { combineReducers } from 'redux';

//todo: I should be using Constants here for the types


const books = (state = [], action) => {    
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id : action.id,
                    title: action.title,
                    author: action.author,
                    description: action.description
                }
            ];
        
        case 'REMOVE_BOOK':
            return state.filter((b) => b.id != action.bookId);
            
        default:
            return state;
    }
};

const library = combineReducers({
    books
})

export default library;