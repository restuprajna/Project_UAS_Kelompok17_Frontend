<template>
  <nav class="navbar navbar-expand-lg navbar-light sticky-top .shadow-lg " style="background-color: #1687A7;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="../assets/img/white_car.png"  width="70" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/explore">Explore Car</router-link>
        </li>

        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Login</router-link>
          
        </li>

      </ul>
      
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name : 'Navbar'
}
</script>

<style>

</style>