import React from 'react';
import Registration from 'Components/Registration';

import 'Styles/normalize.min';
import 'Styles/app';
import Slot from './Slot';
import Profile from './Profile';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            location: null
        };
    }

    componentWillMount() {
        this.setState({
            location: window.location.pathname
        });
    }

    showComponent() {
        let component = null;
console.log('this is the location:', this.state.location)
        // change the component to show based on the url
        switch (this.state.location) {
            case '/profile':
                component = <Profile />
                break;
            
            case '/schedule':
                component = <Slot />
                break;
        
            default:
                component = <Registration />
                break;
        }

        // return the component to show
        return component;
    }

    render() {
        return <div>
            {this.showComponent()}
        </div>
    }
};

export default Main;