import React from 'react';
import utils from '@/utils';

class Profile extends React.Component {
    constructor() {
        super()
    }

    componentWillMount() {
        const result = utils.getProfile(profileId);
    }

    render() {
        return <div>
            Profile
        </div>;
    }
}

export default Profile;