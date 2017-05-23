import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const FormAdd = ({addBook}) => (
    <form action="/add" className="form-add" onSubmit={() => {
        // addBook
        return false;
    }}>
        <fieldset>
            <label htmlFor="form-add-title" className="form-add__label">Title: </label>
            <input id="form-add-title" type="text" name="title" className="form-add__input"/>
        </fieldset>
    
        <button type="submit" className="button mod-form-submit">Add Book</button>
    </form>
);

export default FormAdd;