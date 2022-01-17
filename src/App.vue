<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light sticky-top .shadow-lg " style="background-color: #1687A7;">
      <a class="navbar-brand" href="#">
      <img src="./assets/img/white_car.png"  width="70" alt="">
      </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="showUserBoard" class="nav-item">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/customer" class="nav-link">Customer</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/order" class="nav-link">Order</router-link>
        </li>
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/product" class="nav-link">Product</router-link>
        </li>
        <li v-if="showModeratorBoard" class="nav-item">
          <router-link to="/mod" class="nav-link">Moderator Board</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
        </li>
      </div>

      <div v-if="!currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/register" class="nav-link">
            <font-awesome-icon icon="user-plus" /> Sign Up
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
      </div>

      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
        </li>
      </div>
    </nav>

    
      <router-view />
    
  </div>
</template>

<script>
export default {
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>
