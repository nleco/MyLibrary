import React, { Component } from 'react';
import FormAdd from '../components/FormAdd';
import AlertBox from '../components/AlertBox';

export default class AddView extends Component {
    constructor(props) {
        super(props);
        
        this.state= {
            isAddSuccessVisible : false
        };
        
        this.isAddSuccessVisible = this.isAddSuccessVisible.bind(this);
    }
    
    isAddSuccessVisible(isVisible) {
        this.setState({
            isAddSuccessVisible : isVisible
        });
    }
    
    renderAlertBox() {
        return (
            <div className="u-mb-20">
                <AlertBox type='success'>
                    <p className="u-no-margins">You have succesfully added a book to your library!</p>
                </AlertBox>
            </div>
        )
    }
    
    render () {
        return (
            <div className="add-book">
                <h1 className="app__main__header">Add a Book</h1>
                <p className="app__main__subheader">Just bought a new book? let&apos;s add it now!</p>

                {this.state.isAddSuccessVisible ? this.renderAlertBox() : ''}

                <FormAdd addNewBook={(book) => this.props.addBook(book)} isAddSuccessVisible={(isVisible) => this.isAddSuccessVisible(isVisible)} />
            </div>
        )
    }
}