<template>
    <div>
        <Navbar/>

        <div class="container pt-4">
            <div class="row justify-content-center pt-5">
                <div class="col text-center">
                    <img src="../assets/img/success-icon.png" alt="" height="250" width="250">
                </div>

            </div>
            
            <div class="row justify-content-center pt-5">
                <h2>SUCCESSFULL PAYMENT</h2>
            </div>

            
        </div>
    </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
    name : 'Customer',
    components: { Navbar }
}
</script>

<style>

</style>