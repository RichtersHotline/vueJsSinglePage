<template>
  <div>
    <navbar/>
<main class="container-fluid">
  <router-view/>


</main>

  </div>
</template>
<script>
import navbar from "@/components/navbar.vue" 

export default {
components: {

  navbar

}

}

</script>
<style src="./assets/css/Style.css">

</style>
