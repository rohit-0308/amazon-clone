import axios from "axios";

const instance = axios.create({
     // The API (cloud function) URL
    baseURL: 'https://us-central1-cdclone-20830.cloudfunctions.net/api'
    //'http://localhost:5001/clone-20830/us-central1/api'
});

export default instance;