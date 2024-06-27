<template>
  <div class="container">
<div class="row vh-100 align-items-center">
<div class="col">

<img src="https://richtershotline.github.io/Pimages/Images/Chaos_Insurgency_logo.png" class="img-fluid" loading="lazy">
</div>
<div class="col">
<div id="details">

    <h1 class="display-2">Keenan Timmie</h1>
<p v-if="jobTitle?.length">

<span>{{jobTitle[1]?.jobName}}</span>
</p>
<LoadingSpinner v-else>
    
</LoadingSpinner>
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
const jobTitle = computed(() => store.state.jobTitle)
// const jobName = ref("Aspiring Developer")
// const cnt = ref(-1)



// function repeat() {

//     try{
//         if (cnt.value == jobTitle.value?.length) cnt.value = 0;
//         jobName.value =
//         jobTitle.value?.at(cnt.value)?.jobName;
//         setTimeout(repeat, 2000)
      
//         cnt.value++

//     }catch (e) {
        
        
//         console.log(e.message)

//     }




// }

onMounted(() => {
   
    store.dispatch("getJobTitle")
    // repeat()

})
</script>


<style scoped>

</style>