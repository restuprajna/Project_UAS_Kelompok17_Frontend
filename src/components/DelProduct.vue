<template>
<h1>Suskses</h1>
</template>

<script>
import axios from "axios";
export default {
  name: "DelProduct",
  mounted() {
    axios
      .delete(`http://localhost:8080/api/products/${this.$route.params.id}`)
      .then((response) => this.$router.push("/product")(response.data))
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>