<template>
  <nav class="bg-gray-800 border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <div class="flex md:order-2">
        <button type="button"
          class="ease-in-out duration-300 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          @click="signOut">Log Out</button>

      </div>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-800 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-800 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="#"
              class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
              aria-current="page">Home</a>
          </li>
        </ul>
      </div>

    </div>


  </nav>
  <div
    class="rounded-lg bg-gray-900 w-full items-center lg:w-3/12 m-auto xl:p-10 lg:p-8 relative flex justify-center  lg:flex-row hover:shadow-md border border-blue-800 ">
    <div class="container">
      <div class="card">
        <div class="cardbody">
          <h1 class="text-3xl text-center font-bold text-white my-8">Shorten</h1>
          <div class="mt-8">
            <div class="lg:col-span-2">
              <div class="md:col-span-5">
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                  <form class="submit" @submit.prevent="shorten">
                    <input
                      class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                      type="url" 
                      pattern="https://.*" 
                      v-model="url" 
                      aria-label="URL"
                      placeholder="blabla.com" 
                      required />
                    <br>
                    <input
                      class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                      type="text" 
                      v-model="alias" 
                      aria-label="Alias"
                      placeholder="alias" 
                      required />
                    <br>
                    <input
                      class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4"
                      type="text" 
                      v-model="code" 
                      aria-label="Alias"
                      placeholder="code" 
                      required />
                    <br>
                    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit" @click="$router.push('/dashboard')">
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
  </div>
  
  <div
    >
    <h1 class="text-lg text-gray-900" v-if="linkys.length == 0">It seems you haven't shorten anything yet 😢. Try shorten your first link 👆</h1>
    <Linky v-else v-for="linky in linkys" :key="linky.code" :linky="linky"/>
  </div>
  <h3 class="text-lg font-bold flex items-center"></h3>



</template>


<script>
import { getAuth } from "firebase/auth";
import db  from "../firebase/firebaseInit.js";
import shortid from 'shortid';

import Linky from '@/components/Linky.vue'

const auth = getAuth();

export default {
  components: {
    Linky
  },
  data() {
    return {
      email: auth.currentUser.email,
      url: '',
      alias: '',
      linkys: []
    }
  },
  mounted() {
    this.refreshList();
  },
  methods: {
    signOut() {
      auth
        .signOut()
        .then(() => {
          console.log("Sign Out completed");
          this.$router.push("/");
        })
        .catch((error) => console.log(error));
    },
    async shorten(){
      await db.collection('urls').add({
        alias: this.alias,
        url: this.url,
        code: this.code
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
  },
};
</script>


<style scoped>
  .form-card {
    box-shadow: rgba(124, 38, 237, .7) 0px 3px 10px 0px;
  }
</style>