import React from 'react';
import moment from 'moment';
import utils from '@/utils';
import Profile from './Profile';

class Slot extends React.Component {
    constructor() {
        super();
        this.state =  {
            schedule: null
        };
    }

    componentWillMount() {
        const date = moment().format('YYYY-MM-DD')
        utils.getSchedule(date)
            .then((schedule) => {
                this.setState({
                    schedule
                });
            });
    }

    render() {
        return <div>
            {
                (this.state.schedule)
                    ? this.state.schedule.filter((elem, pos, arr) => {
                            return arr.indexOf(elem) == pos;
                        }).map((item, i) => {
                            return <Profile profileId={item.Id} />;
                        })
                    : null
            }
        </div>;
    }
}

export default Slot;