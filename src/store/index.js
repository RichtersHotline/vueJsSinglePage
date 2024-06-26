import { createStore } from 'vuex'
import axios from "axios"
import Swal from "sweetalert2/dist/sweetalert2"


const portData = "https://richtershotline.github.io/VueEOMP/data"
export default createStore({
  state: {
    jobTitle:null,
    aboutMe:null,
    education:null,
    skills:null,
    monials:null,
    projects:null,
    experiences:null
  },
  getters: {
  },
  mutations: {
    setJobTitle(state, value) {
    state.jobTitle = value

    },
    setAbout(state, value) {
      state.aboutMe = value
  
      },
      setEducation(state, value) {
        state.education = value
    
        },
        setSkills(state, value) {
          state.skills = value
      
          },
          setQuotes(state, value) {
            state.monials = value
        
            },
            setProject(state, value) {
              state.projects = value
          
              },
              setExperiences(state, value) {
                state.experiences = value
            
                }
  },
  actions: {
   async getJobTitle(context) {
    try {
      let {jobTitle} = await (await axios.get(portData)).data
      context.commit("setJobTitle", jobTitle)
   
    }catch(e) {

      Swal.fire ({

        title: "error",
        text:"Can't be done",
        icon: "error",
        timer: 2000
      })

    }

     

    },
    async getAbout(context) {
      try {
        let {About} = await (await axios.get(portData)).data
        context.commit("setAbout", About)
     
      }catch(e) {
  console.log("Nope")

        Swal.fire ({
  
          title: "error",
          text:"Can't be done",
          icon: "error",
          timer: 2000
        })
  
      }
    
  },
  async getEducation(context) {
    try {
      let {Education} = await (await axios.get(portData)).data
      context.commit("setEducation", Education)
   
    }catch(e) {

      Swal.fire ({

        title: "error",
        text:"Can't be done",
        icon: "error",
        timer: 2000
      })

    }
  
},
async getSkills(context) {
  try {
    let {skills} = await (await axios.get(portData)).data
    context.commit("setSkills", skills)
 
  }catch(e) {

    Swal.fire ({

      title: "error",
      text:"Can't be done",
      icon: "error",
      timer: 2000
    })

  }

},
async getMonials(context) {
  try {
    let {Testimonials} = await (await axios.get(portData)).data
    context.commit("setQuotes", Testimonials)
 
  }catch(e) {

    Swal.fire ({

      title: "error",
      text:"Can't be done",
      icon: "error",
      timer: 2000
    })

  }

},
async getProjects(context) {
  try {
    let {projects} = await (await axios.get(portData)).data
    context.commit("setProject", projects)
 
  }catch(e) {

    Swal.fire ({

      title: "error",
      text:"Can't be done",
      icon: "error",
      timer: 2000
    })

  }

},
async getExperiences(context) {
  try {
    let {experiences} = await (await axios.get(portData)).data
    context.commit("setExperiences", experiences)
 
  }catch(e) {

    Swal.fire ({

      title: "error",
      text:"Can't be done",
      icon: "error",
      timer: 2000
    })

  }

},
},
modules: {
  }


  })




 
