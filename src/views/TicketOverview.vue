<template>
  <div class="ticket-overview">
    <h1>Ticket: {{ ticket.title }}</h1>
    <p><strong>Description:</strong> {{ ticket.description }}</p>
    <p><strong>Status:</strong> {{ ticket.status }}</p>
    <p><strong>Customer:</strong> {{ ticket.customer }}</p>
    <!-- Add more fields as needed -->
    <button @click="editTicket">Edit Ticket</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ticket: {},
    };
  },
  methods: {
    fetchTicket() {
      const id = this.$route.params.id; // Get ticket ID from route parameter
      axios.get(`http://localhost:8000/ticket/${id}`)
        .then(response => {
          this.ticket = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    editTicket() {
      this.$router.push({ name: 'updateTicket', params: { id: this.ticket.id } });
    },
  },
  mounted() {
    this.fetchTicket();
  },
}
</script>
