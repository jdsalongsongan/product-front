<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">Seller Dashboard</router-link>
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/products" class="nav-link">Product List</router-link>
          <router-link to="/add" class="nav-link">Add New Product</router-link>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <router-view />
  </div>
</div>
</template>

<script>


export default {
  name: 'App'
}
</script>

<style>

</style>
