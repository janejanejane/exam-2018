import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://vensachallenge2018.azurewebsites.net/'
});

const profile = 'api/Provider/';
const schedule = 'api/Schedule/'

export default {
    getSchedule: (date) => {
        return instance.get(`${schedule}${date}`)
            .then((res) => {
                return JSON.parse(res.data);
            })
            .catch((err) => {
                console.log('schedule error:', err);
            });
    },
    getProfile: (profileId) => {
        return instance.get(`${profile}${profileId}`)
            .then((res) => {
                return JSON.parse(res.data);
            })
            .catch((err) => {
                console.log('profile error:', err);
            });
    }
};