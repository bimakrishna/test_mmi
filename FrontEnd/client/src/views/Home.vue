<template>
  <div class="home container">
    <table class="table table-dark">
  <thead>
    <tr>
      <th>List Karyawan</th>
    </tr>
    <button class="btn btn-dark mt-2" @click.prevent='addEmployeeForm'>add</button>
    <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Name</th>
      <th scope="col">Tanggal lahir</th>
      <th scope="col">Jabatan</th>
      <th scope="col">NIP</th>
      <th scope="col">Jenis Kelamin</th>
      <th scope="col">Aksi</th>
    </tr>
  </thead>
  <tbody>
    <EmployeeList
      v-for="employee in employees"
      :key="employee.id"
      :employee="employee"
      />
  </tbody>
</table>
  </thead>
</table>
  </div>
</template>

<script>
// @ is an alias to /src
import EmployeeList from '../components/EmployeeList'

export default {
  name: 'Home',
  computed: {
    employees () {
      this.$store.dispatch('getEmployees')
      return this.$store.state.employees
    },
    positions () {
      this.$store.dispatch('getPositions')
      return this.$store.state.positions
    }
  },
  methods: {
    addEmployeeForm () {
      this.$router.push('/addFormEmployee')
    }
  },
  components: {
    EmployeeList
  },
  created () {
    this.$store.dispatch('getEmployees')
  }
}
</script>
