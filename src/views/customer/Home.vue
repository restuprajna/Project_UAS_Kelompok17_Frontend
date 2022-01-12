<template>
  <div class="home">
    <Navbar />
    <!--Banner Start here -->
    <div class="container-fluid banner-cover py-2 text-center justify-content-center d-flex">
        <div class="title-banner text-white" >
            <h1 id="title-text" class="mt-5 d-flex justify-content-center">Find YourIdeal Car</h1>
            <p id="tagline">Lets find your ideal car in Bali for rent</p>
            <div class="mt-5 d-flex justify-content-center">
                <router-link class="nav-link btn btn-info text-light" to="/explore">Explore Vehicles</router-link>
            </div>
          </div>
      </div>
    <!--Banner end here -->

    <!--why us Start here -->
<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../../assets/img/slide1.png" class="d-block w-100" alt="convenience" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Improve Your Quality Of Life</h1>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../../assets/img/slide2.png" class="d-block w-100" alt="improve your quality of life" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Convenience</h1>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/img/slide3.png" class="d-block w-100" alt="easy reservations" />
          <div class="carousel-caption d-none d-md-block">
            <h1>Easy Reservations</h1>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <Footer/>



    <!--why us end here -->

  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'




export default {
  name: 'Home',
  components: {
    Navbar,
    Footer
    
    
  }
}
</script>
