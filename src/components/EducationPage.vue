<template>
    <div class="container-fluid">
        <div class="EduCon">
            <h3 class="text-center pt-4">Education</h3>
            <div class="row align-items-center p-2 ms-4 me-4">
                <div class="col justify-content-center">
                    <div class="card border-dark text-center mx-auto" v-if="education?.length">
                        <img :src="education[0]?.SchoolImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
                        <div class="card-body" >
                          <h3 class="card-title">{{education[0]?.School}}</h3>
                          <p class="card-text">{{education[0]?.Duration}}</p>
                        </div>
                      </div>
                </div>
                <div class="col justify-content-center">
                    <div class="card border-dark text-center mx-auto" v-if="education?.length">
                        <img :src="education[1]?.SchoolImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
                        <div class="card-body" >
                          <h3 class="card-title">{{education[1]?.School}}</h3>
                          
                          <p class="card-text">{{education[1]?.Duration}}</p>

                        </div>
                      </div>
                </div>
                <div class="col justify-content-center">
                    <div class="card border-dark text-center mx-auto" v-if="education?.length">
                        <img :src="education[2]?.SchoolImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
                        <div class="card-body" >
                          <h3 class="card-title">{{education[2]?.School}}</h3>
                          <p class="card-text">{{education[2]?.Duration}}</p>
                        </div>
                      </div>
                </div>
                <div class="col justify-content-center">
                    <div class="card border-dark text-center mx-auto" v-if="education?.length">
                        <img :src="education[3]?.SchoolImg" class="card-img-top img-fluid" alt="Eduimage" loading="lazy">
                        <div class="card-body" >
                          <h3 class="card-title">{{education[3]?.School}}</h3>
                          <p class="card-text">{{education[3]?.Duration}}</p>
                        </div>
                      </div>
                </div>
                
              </div>
              
            
    
    
    
    
    

        </div>
        </div>
</template>

<script setup>

import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const education = computed(() => store.state.education)


onMounted(() => {
   
    store.dispatch("getEducation")
    // repeat()

})
</script>

<style>

</style>

