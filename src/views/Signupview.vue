<template>
  <div class="flex flex-col md:flex-row mx-auto border-t border-gray-300">
    <div className="bg-white p-8 rounded basis-1/2 mx-auto  w-full max-w-[450px]">
      <p className="text-left text-2xl font-500 text-blue-500 mb-4">Create an account</p>
      <p className="text-gray-600 mb-4 text-left">Enter your information below to create an account</p>

      <label className="block font-bold mb-2 text-left">Full Name</label>
      <input type="text" name="fullname" className="w-full border border-gray-300 p-2 rounded mb-4" />

      <label className="block font-bold mb-2 text-left">Email</label>
      <input type="email" name="email" class="w-full border border-gray-300 p-2 rounded mb-4" />


      <label className="block font-bold mb-2 text-left">Password</label>
      <input type="password" name="password" className="w-full border border-gray-300 p-2 rounded mb-4" />


      <button className="bg-green-500 text-white pl-8 pr-8 pt-2 pb-2  rounded" type="submit">Create account</button>

      <p className="mt-4 text-gray-600 text-left">Already have an account?
        <Link href="/login" className="text-blue-500">Login
        here</Link>
      </p>
    </div>
    <div class="basis-1/2 text-white text-center p-20 flex flex-col items-center" style="background-color: #16395b;">
      <!-- Image -->
      <img src="../assets/logo.png" alt="Your Image" style="width: 250px; height: auto;">


      <!-- Welcome Back text with icon -->
      <div class="flex items-center mb-4">
        <h2 class="text-2xl font-bold">Welcome to PlacDesk(AI-powered helpdesk system)</h2>
      </div>

      <!-- Paragraph with lorem text -->
      <p>Efficiently manage customer inquiries, automate responses, and improve your support system with the power of
        AI.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignupView',
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
