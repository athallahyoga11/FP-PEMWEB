<template>
    
    <div class="container">
        <div class="card">
          <div class="cardbody">
            <h1 class="text-3xl text-center font-bold text-white my-8">Shorten</h1> 
            <div class="mt-8">
              <div class="lg:col-span-2">
                <div class="md:col-span-5">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                    <form class="submit" @submit.prevent>
                      <input class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4" 
                      type="url"
                      pattern="https://.*" 
                      v-model="url" 
                      aria-label="URL"
                      placeholder="blabla.com"
                      required/>
                      <br>
                      <input class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4" 
                      type="text" 
                      v-model="alias" 
                      aria-label="Alias" 
                      placeholder="newlink.com" 
                      required/>
                      <br>
                      <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" @click="$router.push('/dashboard')">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

    <div class="rounded-xl bg-white lg:-mt-8 py-2 px-4 lg:py-4 mx-auto mb-10 grid grid-flow-row-dense grid-cols-1 lg:grid-cols-3 lg:gap-0">
      <h1 class="text-lg text-gray-900" v-if="linkys.length == 0">It seems you haven't shorten anything yet 😢. Try shorten your first link 👆</h1>
      <Linky v-else v-for="linky in linkys" :key="linky.code" :linky="linky"/>
    </div>
  </template>
  
  <script>
  import db from '../firebase/firebaseInit';
  import shortid from 'shortid';
  
  import Linky from '@/components/Linky.vue'
  
  export default {
    name: 'Shorten',
    components: {
      Linky
    },
    data() {
      return {
        url: '',
        alias: '',
        linkys: []
      }
    },
    mounted() {
      this.refreshList();
    },
    methods: {
      async shorten(){
        let code = shortid.generate().toUpperCase();
        await db.collection('urls').add({
          alias: this.alias,
          url: this.url,
          code: code
        }).then((result) => {
          // Reset form
          this.resetForm();
          // Refresh link list
          this.refreshList();
        }).catch((error) => {
          console.log(error);
        });
      },
      resetForm() {
        this.url = '';
        this.alias = '';
      },
      async refreshList(){
        this.linkys = [];
        await db.collection('urls').get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            this.linkys.push(doc.data());
          })
        }).catch((error) => {
          console.error(error);
        });
      }
    }
  }
  </script>
  
  <style scoped>
    .form-card {
      box-shadow: rgba(124, 38, 237, .7) 0px 3px 10px 0px;
    }
  </style>