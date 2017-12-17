import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    lists: [],
    len: 5,
    page: 3
}

const mutations = {
    addList(state, obj) {
        let list = {
            title: obj.title,
            num: obj.num,
            time: new Date()
        }
        let Tarr = state.lists.filter(item => item.title == list.title);
        !Tarr.length && state.lists.push(list);
        state.lists.sort((a, b) => b.num - a.num);
    },
    changeList(state, obj) {
        let target = state.lists.filter(item => item.time === obj.time)[0];
        target.title = obj.title;
        target.num = obj.num;
        state.lists.sort((a, b) => b.num - a.num);
    },
    delList(state, time) {
        state.lists = state.lists.filter(item => item.time != time)
    },
    changePage(state, page) {
        state.page = +page;
    },
    changeLen(state, len) {
        state.len = +len
    }
}

export default new Vuex.Store({
    state,
    mutations
})