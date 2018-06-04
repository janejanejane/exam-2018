import React from 'react';
import utils from '@/utils';

class Image extends React.Component {
    constructor() {
        super();
        this.state = {
            image: null
        }
    }

    componentWillMount() {
        this.setState({
            image: `http://vensachallenge2018.azurewebsites.net/${this.props.imageUrl}`
        });
    }

    render() {
        if (!this.state.image) null;

        return <img src={this.state.image} {...this.props} alt=""/>;
    }
}

export default Image;