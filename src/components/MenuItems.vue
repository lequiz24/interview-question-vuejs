<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    changePage(page) {
      this.$emit("change-page", page);
    },
  },
};
</script>

<style>
.menu ul {
  list-style: none;
  display: flex; /* set display to flex */
  justify-content: space-between; /* add equal space between the items */
  padding: 0;
  margin: 0;
}

.menu ul li {
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
}
</style>
