import axios from "axios";

export default axios.create({
    baseURL: "http://local.laraver.911vpu.com:100/",
    headers: {
        "Content-type": "application/json"
      }
});