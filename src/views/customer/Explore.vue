<template>
  <div>
    <!-- Banner start here -->

    <div class="container-fluid banner">
      <div>
        <h2>
          <div class="text-center mt-5"><strong>Find Your Car Now</strong></div>
        </h2>
        <h2>
          <div class="text-center">
            Lets find your ideal car at Bali best rent car
          </div>
        </h2>
      </div>

      <img
        src="../../assets/img/home-img.png"
        class="rounded mx-auto d-block pt-5"
        alt=""
      />
    </div>

    <!-- Banner end here -->

    <!-- Cart Start here -->
    <div id="app-display">
      <a href="../Explore Vehicles/index.html" class="app-text"
        >Booking Car Now</a
      >

      <router-link
        type="button"
        class="btn btn-primary position-relative float-right"
        to="/billing"
      >
        Cart
        <span
          class="cart position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
        >
          {{ cart }}
        </span>
      </router-link>
    </div>

    <!--1-->
    <div class="container-fluid bg-explore">
      <div id="item-list-container">
        <div id="item-list">
          <img class="item-image" src="../../assets/img/car-1.png" />
          <div class="item-title">
            <h1><b>Mercedes-Benz SLK 200</b></h1>
          </div>
          <div class="item-price">
            <h3>
              Spesifikasi : <br />
              - Fuel : Pertamax Turbo <br />- Heat Type : Automatic <br />
              - Vahicle Class : Sport Car <br />- Seats : 2 Person
            </h3>
            <h2>Rp.3.500.000</h2>
          </div>
          <button class="item-detail" v-on:click="addToCart">
            <b>rent now</b>
          </button>
          <button class="item-detail-cancel" v-on:click="removeFromCart">
            <b>cancel</b>
          </button>
        </div>
      </div>
    </div>

    <!-- Cart end here -->

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Footer from "@/components/Footer.vue";

export default {
  name: "Explore",
  components: {
    Footer,
  },
};
</script>

<style></style>
