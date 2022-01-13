<template>
    <div>
        <NavbarAdmin/>
        <h2>ini halaman add product</h2>

        <div class="container-fluid py-5 primary-bg-color text-black" id="review">
        

            
            <div class="container">
            <h2 class="text-center mb-4 ">
                Add Product
            </h2>
            
 
            
            </div>
                <form class="offset-lg-2 col-lg-8" @submit.prevent="onSubmit">
                    <div class="mb-3">
                    <label for="nama" class="form-label">Product</label>
                    <input type="text" class="form-control" id="nama" autocomplete="off" v-model="nama">
                    </div>

                    <div class="mb-3">
                    <label for="spesifikasi">Spesifikasi</label>
                    <input type="text"  class="form-control" id="spesifikasi" autocomplete="off" >
                    </div>

                    <div class="mb-3">
                    <label for="stock">Stock</label>
                    <input type="text"  class="form-control" id="email" autocomplete="off" >
                    </div>

                    <div class="mb-3">
                    <label for="Price">Price</label>
                    <input type="text"  class="form-control" id="email" autocomplete="off" >
                    </div>

                    <div class="mb-5">
                        <div class="input-group">
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile04">
                                <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                            </div>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Upload</button>
                            </div>
                        </div>
                    </div>

                    


                    <div class="row justify-content-end">

                        <div class="mb-3 col">
                        <button class="btn btn-primary w-100" style="background-color: green;">Submit</button>
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
import NavbarAdmin from '@/components/NavbarAdmin.vue'


export default {
    name: "AddProduct",
    components:  {
        NavbarAdmin
    }
}
</script>

<style>

</style>