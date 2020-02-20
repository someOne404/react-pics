import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID tKhZF1a2jFHIqiDDq6YN1I2yomYi2s-JLRvjhSuUszc'
    }
});