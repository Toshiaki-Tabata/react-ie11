import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Context-Type': 'application/json',

    },
    responseType: 'json',
});

export const ReadMessage = (callback) => {
    axiosInstance.get('/message.json')
    .then(response => {
        console.log(response.data);

        callback(response.data);
    })
    .catch(error => {
        console.log('ERROR!!');
        console.log(error);
    });
}

export default ReadMessage;