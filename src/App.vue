<template>
  <div>
    <menu></menu>
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/MenuItems.vue';

export default {
  components: {
    Menu,
  },
};
</script>
