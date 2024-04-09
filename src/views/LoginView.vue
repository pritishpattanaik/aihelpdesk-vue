<template>
        <div class="flex flex-col md:flex-row mx-auto border-t border-gray-300">
            <div class="bg-white p-8 rounded basis-1/2 mx-auto  w-full max-w-[450px]">
                <p class="text-2xl font-500 text-blue-500 mb-4 text-left">Login into your account</p>
                <p class="text-gray-600 mb-4 text-left">Use your credentials to log in</p>

                <label class="block font-bold mb-2 text-left">Email</label>
                <input type="text" class="w-full border border-gray-300 p-2 rounded mb-4">

                <label class="block font-bold mb-2 text-left">Password</label>
                <input type="password" class="w-full border border-gray-300 p-2 rounded mb-4">

                <p class="text-blue-500 text-sm mb-4 text-left">Forgot password?</p>

                <button class="inline-block bg-green-500 text-white pl-8 pr-8 pt-2 pb-2  rounded align-left">Login</button>

                <p class="mt-4 text-gray-600 text-left">Don't have an account? <a href="#" class="text-blue-500">Register
                        here</a></p>
            </div>
            <div class="basis-1/2 text-white text-center p-20 flex flex-col items-center"
                style="background-color: #16395b;">
                <!-- Image -->
                <img src="../assets/logo.png" alt="Your Image" width="250" height="auto">

                <!-- Welcome Back text with icon -->
                <div class="flex items-center mb-4">
                    
                    <h2 class="text-2xl font-bold">Welcome to PlacDesk(AI-powered helpdesk system)</h2>
                </div>

                <!-- Paragraph with lorem text -->
                <p>Efficiently manage customer inquiries, automate responses, and improve your support system with the power of AI.</p>
            </div>

        </div>
  </template>
  
  <script>
  export default {
    name: 'LoginView',
    methods: {
      login() {
        // Handle login logic here
        console.log('Login logic goes here');
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  /* Add Tailwind CSS styles here */
  </style>
  