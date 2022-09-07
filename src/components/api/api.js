import * as axios from 'axios';


const baseUrlApi = "https://social-network.samuraijs.com/api/1.0",
      apiKey = '2117729b-7213-45c3-bfdf-cc0c21228ca9';

export const getUsers = (pageSize, currentPage) => {
   let urlApiUsers = `${baseUrlApi}/users?count=${pageSize}&page=${currentPage}`;
   return axios
            .get(urlApiUsers, { withCredentials: true })
            .then(response => {
               return response.data;
            })
}

export const follow = (userId) => {
   let urlFollow = `${baseUrlApi}/follow/${userId}`;
   return axios
      .delete(urlFollow, { 
         withCredentials: true,
         headers : {
            "API-KEY" : apiKey
         }
      })
      .then(response => {
         return response.data
      })
}

export const unfollow = (userId) => {
   let urlFollow = `${baseUrlApi}/follow/${userId}`;
   return axios
      .post(urlFollow, {}, { 
         withCredentials: true,
         headers : {
            "API-KEY" : apiKey
         }
      })
      .then(response => {
         return response.data
      })
}

export const authMe = () => {
   let url = `${baseUrlApi}/auth/me`;
   return axios
            .get(url, { withCredentials: true })
            .then(response => {
               return response.data
            })
}