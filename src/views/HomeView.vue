/* eslint-disable */

<template class="hero">
  <div class="home">
    <header class="hero1">
      <div class="container">
        <!--h1>Welcome to PlacDesk(AI-powered helpdesk system)<router-link to="/ticket-list" class="btn btn-secondary">View Tickets</router-link></h1!-->
        <h1>Welcome to PlacDesk(AI-powered helpdesk system)</h1>

        <!--p class="subtitle">Your AI-powered helpdesk system</p!-->
        <div class="actions">
          <router-link to="/ticket-create" class="btn btn-primary">Raised New</router-link>
          <router-link to="/ticket-list" class="btn btn-secondary">View Tickets</router-link>
          <!--router-link to="http://localhost:8084" class="btn btn-Assistant">AI Assistant</router-link!-->      

        </div>
      </div>
    </header>
  <section class="ticket-count">
  <div class="container">
    <div class="big-number-display">
      <h2>Total</h2>
      <p class="big-count-number">{{ ticketCounts.total }}</p>
    </div>
    <div class="small-number-displays">
      <div v-for="(count, status) in filteredTicketCounts" :key="status" class="small-count-display">
        <h3>{{ formatStatus(status) }}</h3>
        <p class="small-count-number">{{ count }}</p>
      </div>
    </div>
  </div>
</section>
    
    <section class="info">
      <div class="container">
        <p>Efficiently manage customer inquiries, automate responses, and improve your support system with the power of AI.</p>
        <!--iframe ref="myFrame" src="http://localhost:8084" width="100%" height="500px"></iframe!-->
         <!--a class="btn btn-Assistant" href="http://localhost:8084" target="_blank">Vanna AI Assistant</a!-->
         <!--a class="btn btn-Assistant" href="javascript:void(0);" onclick="toggleIframe();">Vanna AI Assistant</a!-->
        <!--iframe id="AI" src="http://localhost:8084" style="width:100%; height:600px; border:none;" title="Vanna AI Assistant"></iframe!-->
        <!--a class="btn btn-Assistant" href="#" @click="toggleIframe">AI Assist</a!-->
        <a class="btn btn-Assistant" href="#" @click="toggleIframe">
          <i class="fas fa-robot"></i>AI Analyst
        </a>
        <iframe v-show="isOpen" id="AI" src="http://localhost:8084" style="width:120%; height:700px; border:none; overflow: auto;" title="Vanna AI Assistant"></iframe>

        

      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, computed } from 'vue';

export default {
  name: 'HomeView',
  
  setup() {
    const ticketCounts = ref({});
    const isOpen = ref(false); // Add this line to create a reactive reference for the iframe visibility

    const filteredTicketCounts = computed(() => {
      const statuses = { ...ticketCounts.value };
      delete statuses.total; // Remove 'total' from the statuses object
      return statuses;
    });

    onMounted(async () => {
      try {
        const response = await axios.get('http://localhost:8000/ticketcount');
        ticketCounts.value = response.data;
      } catch (error) {
        console.error('There was an error fetching the ticket counts:', error);
      }
    });

    // Define a method to toggle the iframe's visibility
    const toggleIframe = () => {
      isOpen.value = !isOpen.value;
    };

    // Make sure to return the new refs and methods so they can be used in your template
    return {
      ticketCounts,
      filteredTicketCounts,
      formatStatus(status) { // Moved formatStatus inside the return to fix the reference issue
        return status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, ' ');
      },
      isOpen, // Return the isOpen ref
      toggleIframe, // Return the toggleIframe method
    };
  },
};
</script>




<style>
/* Layout styles */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.navbar {
  background: #333;
  color: #fff;
  padding: 1rem 0;
}

.navbar-brand {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

.navbar-end {
  text-align: right;
}

.hero {
  padding: 2rem 0;
  text-align: center;
  background: #f5f5f5;
}

.subtitle {
  color: #666;
  font-size: 1.5rem;
  margin-top: 1rem;
}

.actions {
  margin-top: 2rem;
}

.info {
  padding: 2rem 0;
  text-align: center;
}
.big-number-display {
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.big-count-number {
  font-size: 4rem; /* Larger font size for the big number box */
  font-weight: bold;
  color: #007bff;
}

.small-number-displays {
  display: flex;
  flex-direction: row; /* align horizontally */
  justify-content: center; /* center items on the main-axis */
  flex-wrap: wrap; /* allow wrapping if the screen is too small */
  gap: 1rem; /* add space between items */
}

.small-count-display {
  flex: 1; /* flex grow to fill available space */
  min-width: 40px; /* minimum width for each status box */
  padding: 1rem;
  border-radius: 2px;
  text-align: center;
  background: #f0f8ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.small-count-number {
  font-size: 2rem;
  font-weight: bold;
  color: #333;
}

/* Button styles */
.btn {
  display: inline-block;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #007bff;
}

.btn-primary:hover {
  background-color: #0056b3;
}

.btn-secondary {
  background-color: #6c757d;
}

.btn-secondary:hover {
  background-color: #5a6268;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.btn-Assistant {
  background-color: orange; /* Green background */
  color: white; /* White text */
  padding: 10px 24px; /* Top and bottom padding, left and right padding */
  border: none; /* No border */
  border-radius: 5px; /* Rounded corners */
  cursor: pointer; /* Pointer cursor on hover */
  text-decoration: none; /* No underline on the text */
  font-size: 30px; /* Font size */
  transition: background-color 0.3s, transform 0.3s; /* Smooth transition for background color and transform */
  display: inline-block; /* Required for the animation to affect the button */
  animation: bounce 2s infinite; /* Apply the bounce animation */
}

.btn-Assistant:hover, .btn-Assistant:focus {
  background-color: #45a049; /* Darker shade of green on hover/focus */
  outline: none; /* Remove outline */
}



/* Responsive styles */
@media (min-width: 768px) {
  .navbar-end {
    float: right;
  }

  .hero {
    padding: 4rem 0;
  }
}

.hero {
  background: #f5f5f5;
  background: url("@/assets/placdesk.png") no-repeat;
  color: transparent;
}

/*
.ticket-count {
  display: none;
}
*/


</style>
