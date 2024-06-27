<template>
    <div class="container-fluid">
                  
        <div id="AboutMe">
            <h3 class="text-center">About Me</h3> 
        
            <div class="row g-0 justify-content-center">
                <div class="col">
                  </div>
                  <div class="col-md">
                    <div v-if="About?.length">
                    
                    
                    <p class="text-start ">{{About[0]?.Aboutme}}</p>
                    </div>
                    <LoadingSpinner v-else>
                        
                    </LoadingSpinner>
                    
                    <div class="col-md">
                        <img src="https://richtershotline.github.io/Pimages/Images/profile-Image.png" class="img-fluid" alt="AboutPhoto" loading="lazy">        </div>
              </div>
            </div>
        </div>



  </div>
</template>

<script setup>
import {computed, onMounted} from "vue"
import {useStore} from "vuex"
import LoadingSpinner from "./LoadingSpinner.vue"
const store = useStore()
const About = computed(() => store.state.About)


onMounted(() => {
   
    store.dispatch("getAbout")
    // repeat()

})
</script>

<style>

</style>