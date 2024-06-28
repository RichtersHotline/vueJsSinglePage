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
<section class="row" id="skills">
<SkillsPage/>
</section>
<section class="row" id="project">

</section>
<section class="row" id="Education">
  <EducationPage/>
  
</section>
<section class="row" id="Experience">
  <ExpPage/>
  
</section>
<section class="row" id="testimonials">
<MonialComp/>
</section>
<section class="row" id="reachme">

</section>
  </div>
</template>

<script>
// @ is an alias to /src
import LandingPage from "@/components/LandingPage.vue"
import AboutPage from '@/components/AboutPage.vue'
import EducationPage from "@/components/EducationPage.vue"
import SkillsPage from "@/components/SkillsPage.vue"
import ExpPage from "@/components/ExpPage.vue"
import MonialComp from "@/components/MonialComp.vue"
export default {
  name: 'HomeView',
  components: {
  LandingPage,
  AboutPage,
  EducationPage,
  SkillsPage,
  ExpPage,
  MonialComp
  }
}
</script>
