<template>
  <div class="ticket-update">
    <h1>Update Ticket</h1>
    <form @submit.prevent="updateTicket">
      <div>
        <label for="title">Title:</label>
        <input v-model="ticket.title" type="text" id="title" />
      </div>
      <div>
        <label for="description">Description:</label>
        <textarea v-model="ticket.description" id="description"></textarea>
      </div>
      <div>
        <label for="status">Status:</label>
        <select v-model="ticket.status" id="status">
          <option value="open">Open</option>
          <option value="in progress">In Progress</option>
          <option value="resolved">Resolved</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <div>
        <label for="customer">Customer:</label>
        <input v-model="ticket.customer" type="text" id="customer" />
      </div>
      <div>
        <label for="agent">Agent:</label>
        <input v-model="ticket.agent" type="text" id="agent" />
      </div>
      <div>
        <label for="agent_notes">Agent Notes:</label>
        <textarea v-model="ticket.agent_notes" id="agent_notes"></textarea>
      </div>
      <button type="submit">Update Ticket</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TicketUpdate',
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ticket: {
        title: '',
        description: '',
        status: '',
        customer: '',
        agent: '',
        agent_notes: '',
      },
    };
  },
  methods: {
    async fetchTicket() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/ticket/${this.id}`);
        this.ticket = response.data;
      } catch (error) {
        console.error('There was an error fetching the ticket:', error);
      }
    },
    async updateTicket() {
      try {
        await axios.put(`http://127.0.0.1:8000/ticket/${this.id}`, this.ticket);
        alert('Ticket updated successfully!');
        // Redirect or fetch the ticket again here if needed
      } catch (error) {
        console.error('There was an error updating the ticket:', error);
      }
    },
  },
  mounted() {
    this.fetchTicket();
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
