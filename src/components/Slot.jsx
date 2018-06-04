import React from 'react';
import moment from 'moment';
import utils from '@/utils';

class Slot extends React.Component {
    constructor() {
        super();
        this.state =  {
            schedule: null
        };
    }

    componentWillMount() {
        const date = moment().format('YYYY-MM-DD')
        this.setState({
            schedule: utils.getSchedule(date)
        });
    }

    render() {
        return <div>Slot
            {
                this.state.schedule.map((item, i) => {
                    return <div key={i}>item</div>;
                })
            }
        </div>;
    }
}

export default Slot;