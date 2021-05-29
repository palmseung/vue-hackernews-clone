import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

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
    }
}