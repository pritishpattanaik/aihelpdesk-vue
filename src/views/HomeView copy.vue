/* eslint-disable */

<template class="hero">
  <div class="home">
    <header class="hero1">
      <div class="container">
        <h1>Welcome to PlacDesk</h1>
        <p class="subtitle">Your AI-powered helpdesk system</p>
        <div class="actions">
          <router-link to="/ticket-create" class="btn btn-primary">Get Started</router-link>
          <router-link to="/ticket-list" class="btn btn-secondary">View Tickets</router-link>
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
        <h3>{{ formatStatus(status) }} Tickets</h3>
        <p class="small-count-number">{{ count }}</p>
      </div>
    </div>
  </div>
</section>
    <img src="@/assets/placdesk.png" alt="PlacDesk" width="100%" height="auto">
    <section class="info">
      <div class="container">
        <p>Efficiently manage customer inquiries, automate responses, and improve your support system with the power of AI.</p>
      </div>
    </section>
  </div>
</template>


<script>
import axios from 'axios';
import { onMounted, ref } from 'vue';

export default {
  name: 'HomeView',
  setup() {
    const ticketCounts = ref({});

    // We don't destructure 'total' here anymore
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

    function formatStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1).replace(/_/g, ' ');
    }

    return {
      ticketCounts,
      filteredTicketCounts,
      formatStatus,
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
  min-width: 150px; /* minimum width for each status box */
  padding: 1rem;
  border-radius: 10px;
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

</style>
