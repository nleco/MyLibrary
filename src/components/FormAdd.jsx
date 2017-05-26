import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import AlertBox from './AlertBox';

export default class FormAdd extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            title       : '',
            title_error : '',
            author      : '',
            author_error : '',
            description : '',
            description_error : ''
        };
                
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.renderErrorBox = this.renderErrorBox.bind(this);
        this.hasError = this.hasError.bind(this);
        this.isButtonDisabled = this.isButtonDisabled.bind(this);
    }
    
    onSubmit(e) {
        e.preventDefault();
                                
        // todo: Should use a better validator plugin, or self made one.
        // keeping it simple mainly for basic testing.
        new Promise((resolve, reject) => {
                const errors = {};

                if (!_.isString(this.state.title) || this.state.title.length === 0) {
                    errors['title_error'] = 'Please enter a valid title.';
                }

                if (!_.isString(this.state.author) || this.state.author.length === 0) {
                    errors['author_error'] = 'Please enter a valid author.';
                }

                if (!_.isString(this.state.description) || this.state.description.length === 0) {
                    errors['description_error'] = 'Please enter a valid description';
                }
                
                if (_.size(errors)) {
                    reject(errors);
                } else {
                    resolve();
                }
            })
            .then(() => {
                this.formSuccess(); 
            })
            .catch((errors) => {
                this.formErrors(errors);
            });    
    }
    
    

    formSuccess() {
        this.props.addNewBook({
            title       : this.state.title,
            author      : this.state.author,
            description : this.state.description
        });

        this.clearForm();

        this.props.isAddSuccessVisible(true);
        setTimeout(() => {this.props.isAddSuccessVisible(false)}, 3000);
    }
    
    formErrors(errors) {
        this.setState(errors);
    }
    
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value,
            [e.target.name + '_error'] : ''
        });
    }
    
    clearForm() {
        this.setState({
            title       : '',
            title_error : '',
            author      : '',
            author_error : '',
            description : '',
            description_error : ''
        });
    }
    
    renderErrorBox() {
        return (
            <div className="u-mb-20">
                <AlertBox type="error">
                    <p className="u-no-margins">Please check your input values. They are required.</p>
                </AlertBox>
            </div>
        )
    }
    
    hasError() {
        return this.state.title_error || this.state.author_error || this.state.description_error;
    }
    
    isButtonDisabled() {
        return this.state.title.length && this.state.author.length && this.state.description.length ? false : true;
        
    }
    
    render() {
        return (
            <form action="/add" className="form mod-form-add" onSubmit={this.onSubmit}>
                { this.hasError() ? this.renderErrorBox() : ''}
                <fieldset className="fieldset">
                    <label htmlFor="form-add-title" className="label mod-form-add u-mr-20">Title: </label>
                    <input id="form-add-title" type="text" name="title" className={"input mod-form-add" + (this.state.title_error ? ' mod-error' : '')} onChange={this.onChange} value={this.state.title} autoComplete="off" maxLength="200"/>
                </fieldset>
    
                <fieldset className="fieldset">
                    <label htmlFor="form-add-author" className="label mod-form-add u-mr-20">Author: </label>
                    <input id="form-add-author" type="text" name="author" className={"input mod-form-add"  + (this.state.author_error ? ' mod-error' : '')} onChange={this.onChange} value={this.state.author} autoComplete="off" maxLength="100"/>
                </fieldset>
        
                <fieldset className="fieldset">
                    <label htmlFor="form-add-description" className="label mod-form-add u-mr-20">Description: </label>
                    <textarea id="form-add-description" name="description" className={"textarea mod-form-add" + (this.state.description_error ? ' mod-error' : '')} onChange={this.onChange} value={this.state.description} autoComplete="off" maxLength="500"/>
                </fieldset>
    
                <div className="u-mt-20">
                    <button type="submit" className="button submit" disabled={this.isButtonDisabled()}>Add Book</button>
                </div>
            </form>
        );
    }
}