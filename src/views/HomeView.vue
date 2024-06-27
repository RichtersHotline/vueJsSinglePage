<template>
  <div class="container">
<section class="row" id="landing">
<LandingPage/>
</section>
<section class="row" id="about">
<AboutPage/>
</section>
<section class="row" id="resume">

</section>
<section class="row" id="project">

</section>
<section class="row" id="testimonials">

</section>
<section class="row" id="reachme">

</section>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue"
import AboutPage from '@/components/AboutPage.vue'
export default {
  name: 'HomeView',
  components: {
  LandingPage,
  AboutPage
  }
}
</script>
