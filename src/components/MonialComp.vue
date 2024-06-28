<template>
    <div class="container-fluid">
        <div class="TesCon">
        <h3 class="text-center pt-4">Testimonials</h3>
        <div class="row g-0 justify-content-start" v-if="monials?.length">
            
            
                <div class="col">
                    <img src="https://richtershotline.github.io/Pimages/Images/Testimage1.jpg" class="img-fluid mb-1 ms-4 mt-2" alt="AboutPhoto" loading="lazy">        </div>
                    <div class="col  d-flex align-items-end">
                               <p class="text-start ">{{monials[0]?.MonialFName}} {{monials[0]?.MonialLName}}</p>   </div>
                               <p class="text-start ">{{monials[0]?.MonialFName}} {{monials[0]?.testimonialQuote}}</p>
                <div class="col"></div>
          </div>
          <div class="row g-0 justify-content-start">
            <div class="col">
              </div>
              <div class="col  d-flex align-items-end">
                
                <p class="text-start mb-1">"It is a great honor for me to share my testimonial for Keenan Timmie. For the times that I have worked alongside him, he always have  a strong collaboration character. He is a reliable being. He takes well every challenge infront of him, and always seeks to solve them effeciently." -Sipho Nkebe</p>        </div>
               
                <div class="col">
                    <img src="https://richtershotline.github.io/Pimages/Images/Testimage2.jpg" class="img-fluid mb-1" alt="AboutPhoto" loading="lazy">        </div>
          </div>
          <div class="row g-0 justify-content-center">
            
            <div class="col">
                <img src="https://richtershotline.github.io/Pimages/Images/Testimage3.jpg" class="img-fluid mb-1 ms-4" alt="AboutPhoto" loading="lazy">        </div>
                <div class="col  d-flex align-items-end">
                    <p class="text-start mb-1">"Keenan is a highly talented individual that has deep insight in coding. He is a great colleague and demonstrates the ability to work well with others as well individually." -Abdurahmaan Charif </p>        </div>
           
            <div class="col"></div>
      </div>
      <div class="row g-0 justify-content-start">
        <div class="col">
          </div>
          <div class="col  d-flex align-items-end">
            <p class="text-start mb-1">Keenan is a highly creative, well-behaved, and dedicated individual who thrives on collaborating with his peers and excels at working on project assignments." -Joel Mukanya</p>        </div>
           
            <div class="col">
                <img src="https://richtershotline.github.io/Pimages/Images/joel2.jpg" class="img-fluid mb-1" alt="AboutPhoto" loading="lazy">        </div>
      </div>
      <div class="row g-0 justify-content-center">
            
        <div class="col">
            <img src="https://richtershotline.github.io/Pimages/Images/Testimage4.jpg" class="img-fluid mb-1 ms-4" alt="AboutPhoto" loading="lazy">        </div>
            <div class="col  d-flex align-items-end">
                <p class="text-start mb-1">"Keenan has a great work ethic, he is very talented and creative. He has great time management skills and puts his all into what he does. He is always willing to help and will be an asset to anyone he works with." -Leah Basson </p>        </div>
       
        <div class="col"></div>
    </div>
    
    
    
    
    
    </div>
    </div>
</template>

<script setup>

import {computed, onMounted} from "vue"
import {useStore} from "vuex"
const store = useStore()
const monials = computed(() => store.state.monials)


onMounted(() => {
   
    store.dispatch("getMonials")
    // repeat()

})
</script>
>

<style>

</style>
