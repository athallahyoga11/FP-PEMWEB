

<template>

 
    <div class="h-screen bg-gray-600 flex">
    <div class="rounded-lg bg-gray-800 w-full items-center lg:w-3/12 m-auto xl:p-10 lg:p-8 relative flex justify-center  lg:flex-row hover:shadow-md border border-blue-800 ">
  <div class="container">
            <div class="card">
            <div class="cardbody">
                <h1 class="text-3xl text-center font-bold text-white my-8">Login</h1> 
            <div class="mt-8">
        <div class="lg:col-span-2">
          <div class="md:col-span-5">
          <div class="grid gap-4 gap-y-2 text-sm grid-cols-1">
                <form class="submit" @submit.prevent>
                  <input class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4" placeholder="Email" required/>
                  <br>
                  <input class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4" placeholder="Username" required/>
                  <br>
                  <input class="w-full focus:border-blue-600 focus:ring-1 focus:ring-blue-500 focus:outline-none  text- text-black placeholder-gray-500 border border-gray-200 rounded-lg pl-4 py-2 mb-4" placeholder="Password" required/>
                  <br>
                  <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
                  
                  <div class="justify-center grid">
                    <h1 class="text-sm text-white">Don't have an account ?</h1>
                    <button @click="$router.push('/register')" class="text-sm text-blue-600 hover:text-blue-600">Register</button>
                  </div>
                </form>
               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div> 

</template>

<script>

</script>