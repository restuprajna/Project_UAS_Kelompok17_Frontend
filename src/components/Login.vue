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
// import axios from 'axios'


// import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
        name: "Login",
    components: {
        Navbar
        // Form,
        // Field,
        // ErrorMessage,
    },
    data() {
        const schema = yup.object().shape({
        username: yup.string().required("Username is required!"),
        password: yup.string().required("Password is required!"),
        });

        return {
        loading: false,
        message: "",
        schema,
        };
    },
    computed: {
        loggedIn() {
        return this.$store.state.auth.status.loggedIn;
        },
    },
    created() {
        if (this.loggedIn) {
        this.$router.push("/");
        }
    },
    methods: {
        handleLogin(user) {
        this.loading = true;

        this.$store.dispatch("auth/login", user).then(
            () => {
            this.$router.push("/");
            },
            (error) => {
            this.loading = false;
            this.message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                error.message ||
                error.toString();
            }
        );
        },
    },
    };
</script>

<style>

</style>