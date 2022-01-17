<template>
  <div class="">
    <!--Banner Start here -->
    <div
      class="banner-cover py-2 text-center justify-content-center d-flex"
      >
      <div class="title-banner text-white">
        <h1 id="title-text" class="mt-5 d-flex justify-content-center">
          Find Your Ideal Car
        </h1>
        <p id="tagline">Lets find your ideal car in Bali for rent</p>
        <div class="mt-5 d-flex justify-content-center">
          <router-link class="nav-link btn btn-info text-light" to="/explore"
            >Explore Vehicles</router-link
          >
        </div>
      </div>
    </div>
    <!--Banner end here -->

    <!--why us Start here -->
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="../assets/img/slide1.png" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img/slide2.png" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="../assets/img/slide3.png" alt="Third slide">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    <Footer/>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import Footer from "../components/Footer.vue"

export default {
  name: "Home",
  components : {
    Footer,
  },
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      (response) => {
        this.content = response.data;
      },
      (error) => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  },
};
</script>
