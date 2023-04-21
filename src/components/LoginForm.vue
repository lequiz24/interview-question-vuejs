<template>
    <div class="login-form-wrapper">
      <!-- <nav>
        <ul class="horizontal-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav> -->
      <div class="login-form">
        <h2>Login Form</h2>
        <form @submit.prevent="login">
          <div>
            <label for="email_address">Email:</label>
            <input type="email_address" id="email_address" v-model="email_address" />
          </div>
          <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  
  <style>
  /* .login-form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  } */
  .login-form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.horizontal-menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f2f2f2;
}

.login-form {
    margin-top: 3rem;
  border: 1px solid #ccc;
  padding: 3rem;
  border-radius: 0.25rem;
}

  
  h2 {
    text-align: center;
    font-size: 2rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
  }
  
  input[type="text"],
  input[type="password"] {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }
  input[type="email_address"] {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
  }

  .horizontal-menu {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.horizontal-menu li {
  margin-right: 1rem;
}

.horizontal-menu li:last-child {
  margin-right: 0;
}

/* .horizontal-menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
} */

  
  button[type="submit"] {
    display: block;
    background-color: #007bff;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #0069d9;
  }
  </style>
  

  <script>
import axios from "axios";

export default {
  data() {
    return {
        email_address: "",
      password: "",
    };
  },
  methods: {
    login() {
      axios
      .post("http://localhost:8000/login", {
            email_address: this.email_address,
          password: this.password,
          
        })
        .then((response) => {
          console.log(response.data);
         "success" // handle success""
        })
        .catch((error) => {
          console.log(error.response.data);
          // handle error
        });
    },
  },
};
</script>