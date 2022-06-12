import axios from "axios";
const KEY='AIzaSyCdD8GxjmKLKPPJO9bzA7q7IJj8g01qLNc';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/',
    params:{
        part:'snippet ',
        maxResults:9,
        key:KEY,
    },
})
