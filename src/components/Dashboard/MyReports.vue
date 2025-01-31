<template>
    <div :class="{'bg-white text-black': !isDarkMode, 'bg-gray-900 text-white': isDarkMode}"
      class="max-w-6xl mx-auto px-6 py-16 transition-colors duration-300">
      <h1 class="text-3xl font-bold mb-6">My Reports</h1>
      <table class="min-w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th class="py-2 px-4">Report Title</th>
            <th class="py-2 px-4">Status</th>
            <th class="py-2 px-4">Submitted On</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report.id">
            <td class="py-2 px-4">{{ report.title }}</td>
            <td class="py-2 px-4">{{ report.status }}</td>
            <td class="py-2 px-4">{{ report.submittedOn }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isDarkMode: Boolean
    },
    data() {
      return {
        reports: [
          { id: 1, title: "SQL Injection Report", status: "Resolved", submittedOn: "2025-01-30" },
          { id: 2, title: "XSS Vulnerability", status: "Pending", submittedOn: "2025-01-29" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
    padding: 12px;
  }
  
  th {
    background-color: #f1f1f1;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #e1e1e1;
  }
  </style>
  