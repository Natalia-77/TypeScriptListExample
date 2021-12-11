import axios from "axios";

export default axios.create({
    baseURL: "http://local.laraver.vpu911.com:100/",
    headers: {
        "Content-type": "application/json"
      }
});