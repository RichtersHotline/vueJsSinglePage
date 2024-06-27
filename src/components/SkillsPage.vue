<template>
    <div class="container-fluid">
        <div class="SkillsCon">
            <h3 class="text-center pt-4">Skills</h3>
            <div class="row align-items-center text-center">
                <div class="col">
                  
                </div>
                <div class="col-md row text-start">
                    <div class="ListBG d-flex justify-content-center mt-2 pt-2"  v-if="skills?.length">
                  <ul>
                <li>{{skills[0]?.Skill}} - {{skills[0]?.SkillLevel}} </li>
                <li>{{skills[1]?.Skill}} - {{skills[1]?.SkillLevel}} </li>
                <li>{{skills[2]?.Skill}} - {{skills[2]?.SkillLevel}} </li>
                <li>{{skills[3]?.Skill}} - {{skills[3]?.SkillLevel}} </li>
                <li>{{skills[4]?.Skill}} - {{skills[4]?.SkillLevel}} </li>
                <li>{{skills[5]?.Skill}} - {{skills[5]?.SkillLevel}} </li>
                <li>{{skills[6]?.Skill}} - {{skills[6]?.SkillLevel}} </li>
                <li>{{skills[7]?.Skill}} - {{skills[7]?.SkillLevel}} </li>
                <li>{{skills[8]?.Skill}} - {{skills[8]?.SkillLevel}} </li>
                 
                  </ul>
                  <!-- <div class="Skillmages ms-4 mt-3 pt-2 h-50 text-center">
                    <img src="https://richtershotline.github.io/Pimages/Images/732212.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                    <img src="https://richtershotline.github.io/Pimages/Images/photoshop.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                    <img src="https://richtershotline.github.io/Pimages/Images/css-3.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                    
                    <img src="https://richtershotline.github.io/Pimages/Images/excel.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                    <img src="https://richtershotline.github.io/Pimages/Images/c-sharp.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage">
                    <img src="https://richtershotline.github.io/Pimages/Images/asp.png" class="img-fluid p-1 mt-3" loading="lazy" alt="Skimage"> -->
                </div>
                </div>
                </div>
                <div class="col">
                    
                </div>
              </div>




        </div>










   
                    
  
</template>

<script setup>
import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const skills = computed(() => store.state.skills)


onMounted(() => {
   
    store.dispatch("getSkills")
    // repeat()

})
</script>

<style>

</style>