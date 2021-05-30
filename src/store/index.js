import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from '../store/mutations.js';
import { actions } from '../store/actions.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: [],
    },

    getters: {
        fetchedNews(state) {
            return state.news;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        },
    },

    mutations,
    actions,
});