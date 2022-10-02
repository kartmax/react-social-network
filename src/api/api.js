import * as axios from 'axios';


const instansAxios = axios.create({
   baseURL : "https://social-network.samuraijs.com/api/1.0",
   withCredentials: true,
   headers : {
      "API-KEY" : "2117729b-7213-45c3-bfdf-cc0c21228ca9"
   }
})

export const UserAPI = {
   getUsers : (pageSize, currentPage) => {
      let urlApiUsers = `/users?count=${pageSize}&page=${currentPage}`;
      return instansAxios
               .get(urlApiUsers)
               .then(response => {
                  return response.data;
               })
   },
   
   follow : (userId) => {
      let urlFollow = `/follow/${userId}`;
      return instansAxios
         .delete(urlFollow)
         .then(response => {
            return response.data
         })
   },
   
  unfollow : (userId) => {
      let urlFollow = `/follow/${userId}`;
      return instansAxios
         .post(urlFollow)
         .then(response => {
            return response.data
         })
   },
   
   authMe : () => {
      let url = `/auth/me`;
      return instansAxios
               .get(url)
               .then(response => {
                  return response.data
               })
   },
   
   profileUser : (userId) => {
      console.warn('Метод устарел UserAPI.profileUser. Используйте вместо него вот этот profileAPI.getProfile')
      return profileAPI.getProfile(userId)
   },
}

export const profileAPI = {
   getProfile : (userId) => {
      let urlApiUsers = `/profile/${userId}`;
      return instansAxios
               .get(urlApiUsers)
               .then(response => {
                  return response.data
               })
   },

   getStatus : (userId) => {
      let urlApiUsers = `/profile/status/${userId}`;
      return instansAxios
               .get(urlApiUsers)
               .then(response => {
                  return response.data
               })
   },

   updateStatus : (status) => {
      let urlApiUsers = `/profile/status`;
      return instansAxios
               .put(urlApiUsers, {status})
               .then(response => {
                  return response.data
               })
   }

}