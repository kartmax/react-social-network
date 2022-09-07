import * as axios from 'axios';


const instansAxios = axios.create({
   baseURL : "https://social-network.samuraijs.com/api/1.0",
   withCredentials: true,
   headers : {
      "API-KEY" : "2117729b-7213-45c3-bfdf-cc0c21228ca9"
   }
})

export const getUsers = (pageSize, currentPage) => {
   let urlApiUsers = `/users?count=${pageSize}&page=${currentPage}`;
   return instansAxios
            .get(urlApiUsers)
            .then(response => {
               return response.data;
            })
}

export const follow = (userId) => {
   let urlFollow = `/follow/${userId}`;
   return instansAxios
      .delete(urlFollow)
      .then(response => {
         return response.data
      })
}

export const unfollow = (userId) => {
   let urlFollow = `/follow/${userId}`;
   return instansAxios
      .post(urlFollow)
      .then(response => {
         return response.data
      })
}

export const authMe = () => {
   let url = `/auth/me`;
   return instansAxios
            .get(url)
            .then(response => {
               return response.data
            })
}

export const profileUser = (userId) => {
   let urlApiUsers = `/profile/${userId}`;
   return instansAxios
            .get(urlApiUsers)
            .then(response => {
               return response.data
            })
}