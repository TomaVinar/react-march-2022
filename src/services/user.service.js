import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users'
});

export const getUsers = () => axiosInstance.get('').then(response => response);
export const getUser = (id) => axiosInstance.get('/' + id).then(response => response)
export const getPosts = (id) => axiosInstance.get('/' + id + '/posts').then(response => response);