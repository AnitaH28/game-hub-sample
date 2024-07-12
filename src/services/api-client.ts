import axios from "axios";

export default axios.create ({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'fbd91a3f94884a298993152544cf4593'
    }
})