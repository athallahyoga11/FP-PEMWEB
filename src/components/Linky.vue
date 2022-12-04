<template>
    <div class="flex-1 rounded-xl bg-white p-10 my-2 lg:my-4 lg:mx-4 shadow-sm border hover:shadow-md hover:border-purple-600">
      <h3 class="text-lg font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
        {{ linky.alias }}
      </h3>
      <div class="flex items-center">
        <router-link class="text-blue-600 underline mr-4" :to="'/' + linky.code" target="_blank">{{ currentHost }}/{{ linky.code }}</router-link>
        <!-- Copy Button -->
        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Linky',
    props: {
      linky: Object
    },
    data() {
      return {
        currentHost: window.location.host
      }
    },
   
  
  }
  </script>
  
  <style scoped>
    .container:hover {
      box-shadow: rgba(124, 58, 237, .4) 0px 3px 10px 0px;
    }
  </style>