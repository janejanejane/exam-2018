import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://vensachallenge2018.azurewebsites.net/'
});

const image = 'api/Picture/';
const profile = 'api/Provider/';
const schedule = 'api/Schedule/'

export default {
    getSchedule: (date) => {
        console.log('this is date:', date);
        return instance.get(`${schedule}${date}`)
            .then((res) => {
                console.log('schedule result:', res);
                return JSON.parse(res.data);
            })
            .catch((err) => {
                console.log('error:', err);
            });
    },
    getProfile: (profileId) => {
        console.log('this is profileId:', profileId);
        return instance.get(`${profile}${profileId}`)
            .then((res) => {
                console.log('profile result:', res);
            })
            .catch((err) => {
                console.log('error:', err);
            });
    },
    getImage: (imageId) => {
        console.log('this is imageId:', imageId);
        return instance.get(`${image}${imageId}`);
    }
};