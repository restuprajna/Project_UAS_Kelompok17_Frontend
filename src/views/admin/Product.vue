<template>
    <div>
        <NavbarAdmin/>
        <h2>ini halaman Product</h2>

        <div class="container">
            <div class="row mb-2 justify-content-end">
                <div class="col-3 align-items-end ">
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
                            <tr>
                            <th scope="col">No</th>
                            <th scope="col">Product</th>
                            <th scope="col">Spesifikasi</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td class="w-25">
                                <img src="../../assets/img/car-3.png" class="img-fluid img-thumbnail" alt="Car">
                            </td>
                            <td> 
                                <br>- Fuel : Pertamax Turbo 
                                <br>- Heat Type : Automatic
                                <br>- Vahicle Class : Family Car
                                <br>- Seats : 4 Person
                            </td>
                            <td>1</td>
                            <td >Rp.30.000.000</td>
                            <td>

                                <button type="button" class="btn btn-success">Edit</button>
                                <button type="button" class="btn btn-danger ml-2">Delete</button>

                            </td>
                            </tr>

                            <tr>
                            <th scope="row">2</th>
                            <td class="w-25">
                                <img src="../../assets/img/car-4.png" class="img-fluid img-thumbnail" alt="Car">
                            </td>
                            <td>
                                <br> - Fuel : Pertamax Turbo 
                                <br>- Heat Type : Automatic
                                <br> - Vahicle Class : Sport Car
                                <br>- Seats : 2 Person 
                                
                            </td>
                            <td>-</td>
                            <td>Rp.15.000.000</td>

                            <td>
                                
                                <button type="button" class="btn btn-success">Edit</button>
                                <button type="button" class="btn btn-danger ml-2">Delete</button>


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

import NavbarAdmin from '@/components/NavbarAdmin.vue'
export default {
    name : 'Product',
    components: { NavbarAdmin }
}
</script>

<style>

</style>