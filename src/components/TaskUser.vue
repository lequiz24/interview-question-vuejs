<template>
    <div>
      <ul>
        <li v-for="TaskUser in TaskUsers" :key="TaskUser.id">
          {{ TaskUser.title }}
          <button @click="deleteTaskUser(TaskUser.id)">Delete</button>
        </li>
      </ul>
      <form @submit.prevent="createTaskUser">
        <input v-model="newTaskUser" type="text" placeholder="New TaskUser">
        <button type="submit">Create</button>
      </form>
    </div>
  </template>
  
  <script>
  import { getTaskUsers, createTaskUser, deleteTaskUser } from '@/api';
  
  export default {
    data() {
      return {
        TaskUsers: [],
        newTaskUser: '',
      };
    },
    created() {
      this.fetchTaskUsers();
    },
    methods: {
      fetchTaskUsers() {
        getTaskUsers()
          .then((response) => {
            this.TaskUsers = response.data;
          })
          .catch((error) => {
            console.error(error);
          });
      },
      createTaskUser() {
        createTaskUser({
          title: this.newTaskUser,
          completed: false,
        })
          .then(() => {
            this.newTaskUser = '';
            this.fetchTaskUsers();
          })
          .catch((error) => {
            console.error(error);
          });
      },
      deleteTaskUser(id) {
        deleteTaskUser(id)
          .then(() => {
            this.fetchTaskUsers();
          })
          .catch((error) => {
            console.error(error);
          });
      },
    },
  };
  </script>
  