import React, { Component } from 'react';
import FormAdd from '../components/FormAdd';

const AddView = ({addBook}) => (
    <div className="add-book">
        <h1 className="app__main__header">Add a Book</h1>
        <p className="app__main__subheader">Just bought a new book? let&apos;s add it now!</p>

        <div className="u-mt-20">
            <FormAdd addBook={addBook}/>
        </div>
    </div>
);

export default AddView;