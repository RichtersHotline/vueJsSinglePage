<template>
  <footer class="container-fluid">
<div class="row">
<p class="lead">Keenan's portfolio &copy; <span class="shadow">{{cYear}}</span>

</p>

</div>

  </footer>

</template>

<script>
export default {
data() {

    return {
  cYear: new Date().getUTCFullYear()


    }



},


}
</script>

<style>

</style>