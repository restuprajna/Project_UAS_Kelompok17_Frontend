<template>
    <div>
        <Navbar />
        <div class="container-fluid pt-5 pb-5 pr-4 pl-4 card mt-5" style="width: 30rem;">
            <form @submit.prevent="handleSignUp">
                <div class="">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" v-model="email">
                    
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="InputName1" aria-describedby="emailHelp" v-model="name">
                    
                </div>
                <div class="">
                    <label for="exampleInputEmail1" class="form-label">Username</label>
                    <input type="text" class="form-control" id="inputUsername1" aria-describedby="emailHelp" v-model="username">
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
                </div>
                
                <!-- <router-link type="submit" class="mx-auto btn btn-primary text-center justify-content-center d-flex" to="/dashboard">Log in

                </router-link> -->
                <button type="submit" class="mx-auto btn btn-primary text-center justify-content-center d-flex" to="/dashboard">Sign Up

                </button>
            </form>
        </div>
            <div class="container justify-content-center text-center">
            <router-link to="/login">
            <p> already have an account </p>
            </router-link>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import axios from 'axios'


export default {
    name: "SignUp",
    components:  {
        Navbar
    },
    data() {
        return {
            email: '',
            name: '',
            username: '',
            password: '',
        }
    },
    methods: {
        async handleSignUp() {
            // ...
            try {
                await axios.post('http://localhost:8081/api/users/signup', {
                    email: this.email,
                    name: this.name,
                    username: this.username,
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