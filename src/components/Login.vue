<template>
    <div>
        <Navbar />
        <div class="container-fluid pt-5 pb-5 pr-4 pl-4 card mt-5" style="width: 30rem;">
            <form @submit.prevent="handleLogin">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                
                <!-- <router-link type="submit" class="mx-auto btn btn-primary text-center justify-content-center d-flex" to="/dashboard">Log in

                </router-link> -->
                <button type="submit" class="mx-auto btn btn-primary text-center justify-content-center d-flex" to="/dashboard">Log in

                </button>
            </form>
        </div>
        
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'


export default {
    name: "Login",
    components:  {
        Navbar
    },
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async handleLogin() {
            // ...
            try {
                await axios.get('http://localhost:8081/api/users/login/', {
                    email: this.email,
                    password: this.password
                })
            } catch(error) {
                console.log(error.response.data)
            }
        }
    }
}
</script>

<style>

</style>