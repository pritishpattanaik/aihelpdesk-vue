<template>
  <div class="ticket-list">
    <h1>Tickets</h1>
    <div class="filter-section">
      <select v-model="statusFilter">
        <option value="">All Statuses</option>
        <option value="open">Open</option>
        <option value="new">New</option>
        <option value="resolved">Resovled</option>
        <option value="closed">Closed</option>
        <option value="pending">Pending</option>
        <!-- Add more status options as needed -->
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in filteredTickets" :key="ticket.id">
      <td>{{ ticket.title }}</td>
      <td>{{ ticket.status }}</td>
      <td class="actions">
        <router-link :to="`/ticket-overview/${ticket.id}`" class="action-button view">
          <i class="fas fa-eye"></i>
        </router-link>
        <router-link :to="`/ticket-update/${ticket.id}`" class="action-button edit">
          <i class="fas fa-edit"></i>
        </router-link>
        <button @click="deleteTicket(ticket.id)" class="action-button delete">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="previousPage" :disabled="page <= 1">Previous</button>
      <span>Page {{ page }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="page >= totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      tickets: [],
      page: 1,
      perPage: 50,
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
     viewTicket(id) {
    // Navigate to the ticket overview page
    this.$router.push(`/ticket-overview/${id}`);
  },
  editTicket(id) {
    // Navigate to the ticket update page
    this.$router.push(`/ticket-update/${id}`);
  },
  deleteTicket(id) {
    // Confirm and delete ticket
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

<style scoped>
.ticket-list {
  padding: 1em;
}

.filter-section {
  margin-bottom: 1em;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 0.5em;
  border-bottom: 1px solid #ddd;
}

th {
  text-align: left;
}

tr:hover {
  background-color: #f5f5f5;
}

.actions .action-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin: 0 0.25rem;
}

.actions .action-button i {
  font-size: 1rem; /* Adjust size as needed */
}

.actions .action-button.view i {
  color: #4CAF50; /* Example color for view */
}

.actions .action-button.edit i {
  color: #FFC107; /* Example color for edit */
}

.actions .action-button.delete i {
  color: #F44336; /* Example color for delete */
}

/* Hover effect */
.actions .action-button:hover i {
  opacity: 0.8;
}
</style>
