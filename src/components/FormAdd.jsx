import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FormAdd extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title       : '',
            author      : '',
            description : ''
        };
        
        this.onSubmit.bind(this);
        this.onChange.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
        
        this.props.addBook({
            title       : '',
            author      : '',
            description : ''
        });
    }
    
    clearForm() {
        this.setState({
            title       : '',
            author      : '',
            description : ''
        });
    }
    
    onChange(e) {
        console.log({
            [e.target.name] : e.target.value
        });
        
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    
    render() {
        return (
            <form action="/add" className="form mod-form-add" onSubmit={this.onSubmit}>
                <fieldset className="fieldset">
                    <label htmlFor="form-add-title" className="label mod-form-add u-mr-20">Title: </label>
            <input id="form-add-title" type="text" name="title" className="input mod-form-add" onChange={this.onChange} value={this.state.title}/>
                </fieldset>
    
                <fieldset className="fieldset">
                    <label htmlFor="form-add-author" className="label mod-form-add u-mr-20">Author: </label>
                    <input id="form-add-author" type="text" name="author" className="input mod-form-add" onChange={this.onChange} value={this.state.author}/>
                </fieldset>
        
                <fieldset className="fieldset">
                    <label htmlFor="form-add-description" className="label mod-form-add u-mr-20">Description: </label>
                    <textarea id="form-add-description" name="description" className="textarea mod-form-add" onChange={this.onChange} value={this.state.description}/>
                </fieldset>
    
                <div className="u-mt-20">
                    <button type="submit" className="button">Add Book</button>
                </div>
            </form>
        );
    }
}