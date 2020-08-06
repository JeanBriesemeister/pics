import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PJvrd5zStzwiKsV3koibRgqUY3GfJI8wge_P_Cp0hEo'
    }
});