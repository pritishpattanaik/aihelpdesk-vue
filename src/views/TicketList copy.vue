<template>
  <div class="ticket-list">
    <h1>Tickets</h1>
    <select v-model="statusFilter">
      <option value="">All Statuses</option>
      <option value="open">Open</option>
      <option value="closed">Closed</option>
      <!-- Add more status options as needed -->
    </select>
    <ul>
      <li v-for="ticket in filteredTickets" :key="ticket.id">
        {{ ticket.title }} - {{ ticket.status }}
        <button @click="deleteTicket(ticket.id)">Delete</button>
      </li>
    </ul>
    <button @click="previousPage" :disabled="page <= 1">Previous</button>
    <button @click="nextPage" :disabled="page >= totalPages">Next</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tickets: [],
      page: 1,
      perPage: 10,
      statusFilter: '',
    };
  },
  computed: {
    filteredTickets() {
      let filtered = this.tickets;
      if (this.statusFilter) {
        filtered = filtered.filter(ticket => ticket.status === this.statusFilter);
      }
      return filtered.slice((this.page - 1) * this.perPage, this.page * this.perPage);
    },
    totalPages() {
      return Math.ceil(this.tickets.length / this.perPage);
    },
  },
  methods: {
    fetchTickets() {
      axios.get('http://127.0.0.1:8000/ticket/')
        .then(response => {
          this.tickets = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    deleteTicket(id) {
      if (confirm('Are you sure you want to delete this ticket?')) {
        axios.delete(`http://127.0.0.1:8000/ticket/${id}`)
          .then(() => {
            this.fetchTickets(); // Refresh the list after deletion
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    previousPage() {
      if (this.page > 1) this.page--;
    },
    nextPage() {
      if (this.page < this.totalPages) this.page++;
    }
  },
  mounted() {
    this.fetchTickets();
  },
}
</script>
