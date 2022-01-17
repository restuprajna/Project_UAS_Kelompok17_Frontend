<template>
  <div>
    <h2>ini halaman Product</h2>

    <div class="container">
      <div class="row mb-2 justify-content-end">
        <div class="col-3 align-items-end">
          <router-link type="button" to="/addproduct">
            <button type="button" class="btn btn-primary">Add</button>
          </router-link>
        </div>
      </div>
    </div>

    <div class="container-table">
      <div class="row">
        <div class="col-12">
          <table class="table table-image">
            <thead>
              <tr class="text-center">
                <th>No</th>
                <th>Nama</th>
                <th>Spesifikasi</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="text-center"
                v-for="(product, index) in products"
                :key="product.id"
              >
                <td>{{ index + 1 }}</td>
                <td>{{ product.name }}</td>
                <td>{{ product.spesifikasi }}</td>
                <td>{{ product.stock }}</td>
                <td>{{ product.price }}</td>
                <td>
                  <router-link
                    class="btn btn-primary mr-2"
                    :to="'/editproduct/' + product.id"
                  >
                    EDIT
                  </router-link>
                  <router-link
                    class="btn btn-danger mr-2"
                    :to="'/delproduct/' + product.id"
                  >
                    Delete
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Product",
  data() {
    return {
      products: [],
      // currentUkm : null,
    };
  },
  // created(){
  //   // this.retrieveUkms();
  //   // this.refreshListUkm();
  // },

  methods: {
    setProducts(data) {
      this.products = data;
    },
    // retrieveUkms() {
    //   UkmDataService.getAll()
    //     .then(response => {
    //       this.ukms = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // },
    // refreshListUkm() {
    //   this.retrieveUkms();
    //   this.currentUkm = null;
    //   // this.currentIndex = -1;
    // },
  },
  mounted() {
    axios
      .get("http://localhost:8080/api/products")
      .then((response) => this.setProducts(response.data))
      .catch((error) => console.log(error));
    // UserService.getAdminBoard().then(
    //   (response) => {
    //     this.content = response.data;
    //   },
    //   (error) => {
    //     this.content =
    //       (error.response &&
    //         error.response.data &&
    //         error.response.data.message) ||
    //       error.message ||
    //       error.toString();
    //   }
    // );
  },
};
</script>

<style>
</style>