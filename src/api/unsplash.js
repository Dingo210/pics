import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
    Authorization: 'Client-ID k28580eiD8Qe172RzVCYtUlouiMs3I5GHJz8PdOagd4'
    }
});