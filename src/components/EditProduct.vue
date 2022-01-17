<template>
    <div>
        
        <h2>ini halaman edit product</h2>

        <div class="container-fluid py-5 primary-bg-color text-black" id="review">
        

            
            <div class="container">
            <h2 class="text-center mb-4 ">
                Edit Product
            </h2>
            
 
            
            </div>
                <form class="offset-lg-2 col-lg-8" @submit.prevent="editProduct">
                    <div class="mb-3">
                    <label for="nama" class="form-label">Product</label>
                    <input type="text"
                    required
                    class="form-control"
                    id="name"
                    name="name"
                    v-model="product.name">
                    </div>

                    <div class="mb-3">
                    <label for="spesifikasi">Spesifikasi</label>
                    <textarea
                    class="form-control"
                    id="spesifikasi"
                    name="spesifikasi"
                    v-model="product.spesifikasi"
                    placeholder="Max 255 words"
                    rows="20"
                    ></textarea>
                    </div>

                    <div class="mb-3">
                    <label for="stock">Stock</label>
                    <input type="text"
                    required
                    class="form-control"
                    id="stock"
                    name="stock"
                    v-model="product.stock">
                    </div>

                    <div class="mb-4">
                    <label for="Price">Price</label>
                    <input type="text"
                    required
                    class="form-control"
                    id="price"
                    name="price"
                    v-model="product.price">
                    </div>

                    <!-- <div class="mb-5">
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile04">
                                <label class="custom-file-label" for="inputGroupFile04"
                                v-on:change="upload">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" style="background-color: #D3E0EA">Upload</button>
                            </div>
                        </div>
                    </div> -->

                    


                    <div class="row justify-content-end">

                        <div class="mb-3 col">
                        <button class="btn btn-primary w-100" style="background-color: green;"
                        type="submit">Submit</button>
                        </div>
                        <div class="mb-3 col">
                        <router-link  to="/product">
                        <button class="btn btn-primary w-100" style="background-color: #B83B5E;">Cancel</button>

                        </router-link>
                        </div>
                    </div>
                </form>
        
        </div>


    </div>
  
</template>

<script>

import axios from "axios";

export default {
    name: "EditProduct",
     data() {
        return {
        product: {
            id: null,
            name: "",
            spesifikasi: "",
            stock: "",
            price: ""
        },
        };
    },
    
    methods: {
        setProducts(data){
        this.product = data;
    },
        editProduct() {
        const product = {
            id: this.product.id,
            name: this.product.name,
            spesifikasi: this.product.spesifikasi,
            stock: this.product.stock,
            price: this.product.price,
        };
        axios
            .put(`http://localhost:8080/api/products/${this.$route.params.id}`, product)
            .then((response) => this.$router.push ("/product") (response))
            .catch(function (error) {
            console.log(error);
            });
        },
    },

    mounted(){
        axios
            .get(`http://localhost:8080/api/products/${this.$route.params.id}`)
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error));
    }
}
</script>

<style>

</style>