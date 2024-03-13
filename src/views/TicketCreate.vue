<template>
  <div>
    <h1>Create Ticket</h1>
    <form @submit.prevent="submitTicket">
      <input v-model="ticket.title" placeholder="Title" required>
      <textarea v-model="ticket.description" placeholder="Description" required></textarea>
      <input v-model="ticket.status" placeholder="Status" required>
      <input v-model="ticket.customer" placeholder="Customer" required>
      <textarea v-model="ticket.agent_notes" placeholder="Agent Notes" required></textarea>
      <button type="submit">Create Ticket</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      ticket: {
        title: '',
        description: '',
        status: '',
        customer: '',
        agent_notes: '',
      }
    };
  },
  methods: {
    async submitTicket() {
      try {
        // Directly making the API call without assigning the response to a variable
        await axios.post('/ticket/', this.ticket);
        alert('Ticket created successfully');
        this.$router.push('/'); // Assuming you have a route setup for the dashboard or ticket list
      } catch (error) {
        alert('There was an error creating the ticket: ' + error.message);
      }
    }
  }
};
</script>

<style scoped>
input[type="text"],
textarea,
select,
button {
  display: block;
  width: 90%; /* Change as per your design requirements */
  padding: 10px;
  margin: 10px auto; /* Center the inputs */
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #007bff;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

form {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Simple box shadow for styling */
}

h1 {
  text-align: center;
}
</style>
