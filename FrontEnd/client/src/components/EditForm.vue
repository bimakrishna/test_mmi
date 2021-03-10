<template>
  <div class="home container">
    <table class="table table-dark">
  <thead>
    <tr>
      <th>Edit Data Karyawan</th>
    </tr>
  </thead>
</table>
<form>
  <div class="form-group row">
    <label for="nama" class="col-sm-2 col-form-label">Nama:</label>
    <div class="col-sm-10">
      <input v-model="editEmployeePayload.nama" class="form-control" id="nama" >
    </div>
      <label for="birth_date" class="col-sm-2 col-form-label">Date</label>
      <div class="col-10">
        <input v-model="editEmployeePayload.birth_date" class="form-control" type="date">
      </div>
    <label for="PositionId" class="col-sm-2 col-form-label">Position</label>
        <div class="col-sm-10" >
        <select class="form-control" id="category" v-model="editEmployeePayload.PositionId">
            <option disabled value ="">Please select one</option>
            <option value="1">System Analyst</option>
            <option value="2">BPS</option>
            <option value="3">Programmer</option>
            <option value="4">Tester</option>
            <option value="5">Helpdesk</option>
        </select>
        </div>
    <label for="Id_number" class="col-sm-2 col-form-label">NIP</label>
    <div class="col-sm-10">
      <input v-model="editEmployeePayload.Id_number" class="form-control" type="number">
    </div>
    <label for="gender" class="col-sm-2 col-form-label">Jenis Kelamin</label>
        <div class="col-sm-10" >
        <select class="form-control" id="category" v-model="editEmployeePayload.gender">
            <option disabled value ="">Please select one</option>
            <option value="2">Wanita</option>
            <option value="1">Pria</option>
        </select>
        </div>
  </div>
  <div class="buttonedit">
    <button @click.prevent="backHome" class="button-kiri btn btn-warning">kembali</button>
    <button @click.prevent="editEmployee" class="button-kanan btn btn-dark">simpan</button>
  </div>
</form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'EditForm',
  props: ['employee'],
  data () {
    return {
      editEmployeePayload: {
        id: '',
        nama: '',
        birth_date: '',
        Id_number: 0,
        gender: '',
        PositionId: ''
      }
    }
  },
  created () {
    console.log(this.employee)
    this.editEmployeePayload.id = this.$route.params.id
    this.editEmployeePayload.nama = this.editEmployeeValue.nama
    this.editEmployeePayload.birth_date = this.editEmployeeValue.birth_date
    this.editEmployeePayload.Id_number = this.editEmployeeValue.Id_number
    this.editEmployeePayload.gender = this.editEmployeeValue.gender
    this.editEmployeePayload.PositionId = this.editProductValue.PositionId
  },
  computed: {
    editEmployeeValue () {
      return this.$store.state.editEmployeeValue
    },
    positions () {
      return this.$store.state.positions
    }
  },
  methods: {
    editEmployee () {
      this.$store.dispatch('editEmployee', this.editEmployeePayload)
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Apakah anda akan menyimpan data ini ?',
        showCancelButton: true,
        confirmButtonText: 'Save'
      })
        .then((result) => {
          if (result.isConfirmed) {
            this.$store.dispatch('getEmployees')
            this.$router.push('/')
          }
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'oopppsss',
            text: err.response.data.message + '!'
          })
        })
    },
    backHome () {
      this.$store.dispatch('getEmployees')
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.col-sm-2 {
  margin-bottom: 10px;
}
.buttonedit {
  text-align: center;
}
.button-kanan {
  margin-left: 30px;
}
.button-kiri {
  margin-right: 30px;
}
</style>
