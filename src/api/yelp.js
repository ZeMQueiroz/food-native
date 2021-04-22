import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
        'Bearer qtFdcaRa4LzAk_ryvvw1_8FjHBbuRKiCkckoXSK653A39Wi3eKLXMbxhSUZyKHAafZFbJznLORYIU0CXCcHmchN_JzoYer7d7T3B-OzoMar_tGUal-NdKQZn6k-BYHYx'
    }
});