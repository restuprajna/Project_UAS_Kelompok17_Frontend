<template>
    <div>
        <Navbar />

        <!-- Find Location Start here -->

        <div class="containe-fluid  py-5 primary-bg-color text-black">

        <div class="container">
            <h2 class="text-center mb-4">Find Your Location</h2>

        <div class="row mb-3 ">

            <div class="col-lg-4 col-md-4 col-sm-6 mt-5 text-center justify-content-center">

                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        Rent Location 
                    </a>

                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>           

            <div class="col-lg-4 col-md-4 col-sm-6 mt-5 text-center">
                <form>
                    <div class="m-">
                        <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30" required>
                        <span class="validity"></span>
                    </div>
                    
                </form>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-6 mt-5 text-center">
                <form>
                    <div class="m-">
                        <input id="party" type="datetime-local" name="partydate" min="2017-06-01T08:30" max="2017-06-30T16:30" required>
                        <span class="validity"></span>
                    </div>
                    
                </form>
            </div>
        </div>

        </div>


        </div>

        <!-- Find Location End here -->

        

        <!-- Billing Detail Start here -->
        <div class="container-fluid py-5 primary-bg-color text-black" id="review">
        

            
            <div class="container">
            <h2 class="text-center mb-4 ">
                Billing Detail
            </h2>
            
 
            
            </div>
                <form class="offset-lg-2 col-lg-8" @submit.prevent="onSubmit">
                    <div class="mb-3">
                    <label for="nama" class="form-label">Name</label>
                    <input type="text" class="form-control" id="nama" autocomplete="off" v-model="nama">
                    </div>

                    <div class="mb-3">
                    <label for="email">Driver Licence (optional)</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>

                    <div class="mb-3">
                    <label for="email">Street</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>

                    <div class="mb-3">
                    <label for="email">City</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>

                    <div class="mb-3">
                    <label for="email">Province</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>

                    <div class="mb-3">
                    <label for="email">Regional</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>

                    <div class="mb-3">
                    <label for="email">Phone</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>

                    <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email"  class="form-control" id="email" autocomplete="off" v-model="email">
                    </div>







                    



                    <div class="mb-3">
                    <button class="btn btn-primary w-100" style="background-color: #B83B5E;">Send</button>
                    </div>
                </form>
        
        </div>

        <!-- Billing Detail End here -->

        <!-- Additional Information Start here -->
        <div class="containe-fluid  py-5 primary-bg-color text-black">

            <div class="container">
                <h2 class="text-center mb-4">Additional Information</h2>
                <form class="offset-lg-2 col-lg-8" @submit.prevent="onSubmit">
                    

                    <div class="mb-3">
                    <label for="Review">Order Notes (optional)</label>
                    <textarea name="" class="form-control" id="Review" cols="30" rows="10" v-model="review"></textarea>
                    </div>

                    <div class="mb-3">
                    <button class="btn btn-primary w-100" style="background-color: #B83B5E;">Send</button>
                    </div>
                </form>
            </div>
        </div>


        <!-- Additional Information End here -->

        <!-- Payment Start here -->
        <div class="container py-5 primary-bg-color text-black">
            <h2 class="text-center mb-4">Payment</h2>

            <div class="position-relative">
                
                <div class="row mb-2">

                    <div class="col-8  form-check ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                        <label class="form-check-label" for="flexRadioDefault1">
                            CASH ON DELIVERY
                        </label>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col">
                        <p class="font-italic">

                        pay with cash upon delivery
                        </p>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="form-check col-8 ">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                        <label class="form-check-label" for="flexRadioDefault2">
                            ONLINE PAYMENT VIA MIDTRANS
                        </label>
                    </div>
                </div>

                <div class="row mb-2">
                    <div class="col-8">
                        <p class="font-italic">
                        your personal data will be used to process order, support your experience throughout this website, and for other purpose described in our privacy policy
                        </p>
                    </div>
                </div>
                
                <div class="row mb-2">
                    <div class="form-check col-8 mb-5">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            i have read and agree to the website terms and conditions
                        </label>

                    </div>
                </div>

                <div class="row mb-2 justify-content-center text-center">
                    <div class="col-8 ">
                        <router-link to="/paymentsuccess">
                        <button class="btn btn-primary w-50" style="background-color: #1687A7;">Place Order</button>
                        </router-link>
                    </div>

            
                </div>

                
            </div>


        </div>

        <!-- Payment End here -->
    </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue'


export default {
    name: "Billing",
    components:  {
        Navbar,
        
    }
}
</script>

<style>

</style>