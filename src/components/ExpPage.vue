<template>
    <div class="container-fluid">
        <div class="WorkCon"  v-if="experiences?.length">
        <h3 class="text-center pt-4">Work Experience</h3>
        <ol class="list-group w-75 ps-5 pb-5 mx-auto">
            <li class="list-group-item d-flex justify-content-between align-items-center"  >
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{experiences[0]?.Company}}</div>
                <p class="text-center ">{{experiences[0]?.jobN}}</p>
                <p class="text-center ">{{experiences[0]?.JobDescription}}</p>
                <p>{{experiences[0]?.Length}} </p>
              </div>
              
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">{{experiences[1]?.Company}}</div>
                <p class="text-center ">{{experiences[1]?.jobN}}</p>
                <p class="text-center ">{{experiences[1]?.JobDescription}}</p>
                <p class="text-center ">{{experiences[1]?.Length}} </p>

              </div>
              
            </li>
          </ol>
        
       
          
    
    
    
    
    
    
        </div>
        </div>
</template>

<script setup>

import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const experiences = computed(() => store.state.experiences)


onMounted(() => {
   
    store.dispatch("getExperiences")
    // repeat()

})
</script>

<style>

</style>


