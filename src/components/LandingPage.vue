<template>
  <div class="container">
<div class="row">
<div class="col">

<img src="https://richtershotline.github.io/Pimages/Images/Chaos_Insurgency_logo.png" class="img-fluid" loading="lazy">
</div>
<div class="col">
<div id="details">

    <h1 class="display-2">Keenan Timmie</h1>
<span>{{jobTitle[0].jobName}}</span>
</div>

</div>

</div>
  </div>
</template>

<script setup>
import {computed, onMounted} from "vue"
const jobTitle = computed(() => this.$store.state.jobTitle)
onMounted(() => {

    this.$store.dispatch("getJobTitle")

})
</script>

<style scoped>

</style>