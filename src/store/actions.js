import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList, 
    fetchUserInfo,
    fetchCommentItem,
} 
from "../api/index.js";

export const actions = {
    FETCH_NEWS({ commit }) {
        fetchNewsList()
        .then(({ data }) => {
            commit('SET_NEWS', data);
        })
        .catch(error => console.log('error = ', error));   
    },
    FETCH_JOBS({ commit }){
        fetchJobsList()
        .then(({ data }) => {
            commit('SET_JOBS', data);
        })
        .catch(error => console.log('error = ', error));
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
        .then(({ data }) => {
            commit('SET_ASK', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then( ({ data }) => {
            commit('SET_USER', data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ITEM({ commit }, item) {
        fetchCommentItem(item)
        .then( ({ data }) => {
            console.log(item);
            commit('SET_ITEM', data);
        }) 
        .catch(error => console.log(error));
    }
}