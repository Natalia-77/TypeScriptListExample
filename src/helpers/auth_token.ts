import http from '../http_common';

export const Authtoken=(token: string)=> {
    if (token) {
        http.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete http.defaults.headers.common['Authorization'];
    }
}