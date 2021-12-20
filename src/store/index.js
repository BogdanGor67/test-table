import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    info: null,
    showContent: false
  },
  getters: {
    showContent: state => state.showContent,
    all: state => state.info,
    infoLength: state => state.info.length >= 1 ? state.info[state.info.length - 1].id : 0,
  },
  mutations: {
    changeShowContent(state, bollean) {
      state.showContent = bollean;
    },
    setInfo(state, data) {
      state.info = data;
    },
    removePost(state, id) {
      state.info.splice(id, 1);
    },
    resetContent(state, index) {
      state.info[index].body = '';
    },
    changeText(state, {index, newText}) {
      state.info[index].body = newText;
    },
    allowChangeContent(state, {index, bollean}) {
      state.info[index].allowChangeContent = bollean;
    },
    addRow(state, obj) {
      state.info.push(obj);
    }
  },
  actions: {
    async setInfo(store, data) {
      try {
        let tablesInfo = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=8');
        tablesInfo.data.forEach(item => item.allowChangeContent = false);
        store.commit('setInfo', tablesInfo.data);
        store.commit('changeShowContent', true);
      } catch (err) {
        store.commit('changeShowContent', false);
      }
    },
    removePost(store, id) {
      store.commit('removePost', id);
    },
    resetContent(store, index) {
      store.commit('resetContent', index);
    },
    changeText(store, {index, newText}) {
      store.commit('changeText', {index, newText});
    },
    allowChangeContent(store, {index, bollean}) {
      store.commit('allowChangeContent', {index, bollean});
    },
    addRow(store, obj) {
      store.commit('addRow', obj);
    }
  }
})
