import React from 'react';
import utils from '@/utils';
import Image from './Image';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: false,
            profile: null
        };
    }

    componentWillMount() {
        utils.getProfile(this.props.profileId)
            .then((profile) => {
                this.setState({
                    profile
                });
            });
    }

    render() {
        const record = this.state.profile;
        return <div class="profile">
            {
                (record)
                    ? [
                        <Image class="profile-image" imageUrl={record.PictureURL} />,
                        <div class="profile-name-title">
                            <div class="profile-name">{record.Name}</div>
                            <div class="profile-title">{record.Title}</div>
                        </div>,
                        <div style={
                                {display: (this.state.expanded) ? 'block' : 'none'}
                            }>
                            <p>{record.Description}</p>
                            <label>Languages spoken</label>
                            <p>{record.Languages}</p>
                            <label>Education</label>
                            <p>{record.Degrees}</p>
                        </div>
                    ]
                    : null
            }
        </div>;
    }
}

export default Profile;