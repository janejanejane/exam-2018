import React from 'react';
import utils from '@/utils';
import Image from 'Components/Image';

class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: false,
            profile: null
        };
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
    }

    componentWillMount() {
        utils.getProfile(this.props.profileId)
            .then((profile) => {
                this.setState({
                    profile
                });
            });
    }

    showDetails() {
        this.setState({
            expanded: true
        });
    }

    hideDetails() {
        this.setState({
            expanded: false
        });
    }

    render() {
        const record = this.state.profile;
        return <div class="profile">
            {
                (record)
                    ? [
                        <Image onClick={this.showDetails} 
                            class={`profile-image ${(this.state.expanded) ? 'image-center' : ''}`}
                            imageUrl={record.PictureURL} />,
                        <div onClick={this.showDetails} 
                            class={`${(this.state.expanded) ? 'profile-name-title--multiple-line' : 'profile-name-title--single-line'}`}>
                            <div class="profile-name">{record.Name}</div>
                            <div class="profile-title">{record.Title}</div>
                        </div>,
                        <div class={`profile-details ${(this.state.expanded) ? 'show-content' : 'hide-content'}`}>
                            <button onClick={this.hideDetails}>Book an Appointment</button>
                            <p>{record.Description}</p>
                            <label>Languages spoken</label>
                            <p>{record.Languages}</p>
                            <label>Education</label>
                            <p>{record.Degrees}</p>
                            <div onClick={this.hideDetails} class="close-div"></div>
                        </div>
                    ]
                    : null
            }
        </div>;
    }
}

export default Profile;