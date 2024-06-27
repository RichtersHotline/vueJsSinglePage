<template>
  
</template>

<script setup>
import {computed, onMounted} from "vue"
import {useStore} from "vuex"
import LoadingSpinner from "./LoadingSpinner.vue"
const store = useStore()
const jobTitle = computed(() => store.state.jobTitle)


onMounted(() => {
   
    store.dispatch("getJobTitle")
    // repeat()

})
</script>

<style>

</style>