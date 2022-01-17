<template>
  
  <div >
      


      <!-- sidebar start here -->
    <!-- <div class="row sidebar" >
      <div class="p-5 text-center text-dark col-3" style="background-color: #D3E0EA;">
        <nav class="navbar-dark">
          <ul class="navbar-nav">
            
            <li>
              <router-link class="nav-link px-3 active" to="/dashboard">
                <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                
                <span class="text-dark">DASHBOARD</span>
              </router-link>
              

              <router-link class="nav-link px-3 active" to="/customer">
                <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                
                <span class="text-dark">CUSTOMER</span>
              </router-link>

              <router-link class="nav-link px-3 active" to="/order">
                <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                
                <span class="text-dark">ORDER</span>
              </router-link>

              <router-link class="nav-link px-3 active" to="/product">
                <span class="me-2"><i class="bi bi-speedometer2"></i></span>
                
                <span class="text-dark">PRODUCT</span>
              </router-link>





            </li>
            
          </ul>
        </nav>
        </div>
      </div> -->

        <div class="row ">
          <div class="col-3 ml-5 mt-5 dashboard-icon text-center text-dark ">
            <router-link  to="/customer">
            <img src="../../assets/img/user-icon.png" alt="gambar user" class="mb-5 mt-3" height="140" width="140">
            <h3 class="text-dark ">Users</h3>
            <h3 class="text-dark ">3</h3>
            <p>{{users}}</p>
            </router-link>
          </div>
          <div class="col-3 ml-5 mt-5 dashboard-icon text-center">
            <router-link to="/order">
            <img src="../../assets/img/order-icon.png" alt="" class="mb-5 mt-3" height="140" width="140">
            <h3 class="text-dark">Order Now</h3>
            <h3 class="text-dark">2</h3>
            </router-link>
          </div>
          <div class="col-3 ml-5 mt-5 dashboard-icon text-center">
            <router-link to="/product">
            <img src="../../assets/img/car-icon.png" alt="" class="mb-5 mt-3" height="140" width="140">
            <h3 class="text-dark">Product Available</h3>
            <h3 class="text-dark">2</h3>
            </router-link>
          </div>
        </div>

      
    
      <!-- sidebar end here -->


      <div class="container">
        
      </div>


      

      
  </div>
</template>

<script>





export default {
    name : 'Dashboard',
    
    
    // ,
    // data() {
    //   return {
    //     users: 0
    //   }
    // },
    // methods: {
    //   getUsers() {
    //     try {
    //       const response = await axios.get('/users')
    //       this.users = response.data.length
    //     } catch(err) {
    //       console.log(err)
    //     }
    //   }
    // }
}
</script>


<style>

</style>