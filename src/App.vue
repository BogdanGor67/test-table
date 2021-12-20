<template>
  <div id="app">
    <div class="container" v-if="showContent">
      <div class="mt-3 mb-5">
        <v-modal v-show="showModal" @closeModal="closeModal" />
      </div>
      <div class="mt-3 mb-5">
        <button @click="showModal = !showModal" class="btn btn-lg btn-success">
          Add new post
        </button>
      </div>
      <v-table :info="all" />
    </div>
    <Err v-else />
  </div>
</template>

<script>

import axios from 'axios';
import {mapGetters, mapActions} from 'vuex';
import VTable from '@/components/VTable';
import VModal from '@/components/VModal';
import Err from '@/components/Err';

export default {
  name: 'App',
  components: {
    VTable,
    VModal,
    Err
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapGetters(['all', 'showContent']),
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
};
</script>

<style>

  
</style>
