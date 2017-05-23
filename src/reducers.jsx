import { combineReducers } from 'redux';

//todo: I should be using Constants here for the types

const page = (state = 'HOME', action) => {
    
    switch (action.type) {
        case 'UPDATE_PAGE':
            return action.page;
        
        default:
            return state;
    }
    return state;
};

const books = (state = [], action) => {
    switch (action) {
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
            return state.filter((b) => b.id != action.id);
            
        default:
            return state;
    }
};

const library = combineReducers({
    page,
    books
})

export default library;