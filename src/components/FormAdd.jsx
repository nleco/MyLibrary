import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const FormAdd = ({addBook}) => (
    <form action="/add" className="form-add mod-form-add" onSubmit={() => {
        // addBook
        return false;
    }}>
        <fieldset className="fieldset">
            <label htmlFor="form-add-title" className="label u-mr-20">Title: </label>
            <input id="form-add-title" type="text" name="title" className="input"/>
        </fieldset>
    
        <div className="u-mt-20">
            <button type="submit" className="button mod-form-submit">Add Book</button>
        </div>
    </form>
);

export default FormAdd;