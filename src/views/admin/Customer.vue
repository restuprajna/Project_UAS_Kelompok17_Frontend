<template>
    <div>
        <NavbarAdmin/>
        <h2>ini halaman Customer</h2>

        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Driver Licence</th>
                <th scope="col">Street</th>
                <th scope="col">City</th>
                <th scope="col">Province</th>
                <th scope="col">Regional</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Restu</td>
                    <td>-</td>
                    <td>Jl.Raya Takmung Tojan</td>
                    <td>Klungkung</td>
                    <td>Bali</td>
                    <td>Indonesia</td>
                    <td>081339961365</td>
                    <td>prajna.restu.rp@gmail.com</td>
                </tr>

                <tr>
                    <th scope="row">2</th>
                    <td>Restu</td>
                    <td>-</td>
                    <td>Jl.Raya Takmung Tojan</td>
                    <td>Klungkung</td>
                    <td>Bali</td>
                    <td>Indonesia</td>
                    <td>081339961365</td>
                    <td>prajna.restu.rp@gmail.com</td>
                </tr>

                <tr>
                    <th scope="row">3</th>
                     <td>Restu</td>
                    <td>-</td>
                    <td>Jl.Raya Takmung Tojan</td>
                    <td>Klungkung</td>
                    <td>Bali</td>
                    <td>Indonesia</td>
                    <td>081339961365</td>
                    <td>prajna.restu.rp@gmail.com</td>
                </tr>
            </tbody>
        </table>
        

    </div>
    
</template>

<script>

import NavbarAdmin from '@/components/NavbarAdmin.vue'
export default {
    name : 'Customer',
    components: { NavbarAdmin }
}
</script>

<style>

</style>