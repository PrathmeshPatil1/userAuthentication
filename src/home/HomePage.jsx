import React from 'react';
import { authService }from '../helpers/index';


export class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authService.currentUserValue,
            userFromApi: null
        };
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div>
                <h1>Home</h1>
                <p>Your role is: <strong>{currentUser.role}</strong>.</p>
                <p>This page can be accessed by all authenticated users.</p>
            </div>
        );
    }
}