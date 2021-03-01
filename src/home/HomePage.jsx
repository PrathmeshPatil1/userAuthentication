import React from 'react';
import { authService }from '../helpers/index';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authService.currentUserValue
        };
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div style={{textAlign:'center'}}>
                <h1>Home Page</h1>
                <p>Your role is: <strong>{currentUser.role}</strong>.</p>
                <p>This page is for all authenticated users.</p>
            </div>
        );
    }
}