<template>
  <div class="home container">
    <table class="table table-dark">
  <thead>
    <tr>
      <th>Add Data Karyawan</th>
    </tr>
  </thead>
</table>
<form>
  <div class="form-group row">
    <label for="inputNama" class="col-sm-2 col-form-label">Nama:</label>
    <div class="col-sm-10">
      <input v-model="addEmployeePayload.nama" class="form-control" placeholder="Nama">
    </div>
      <label for="example-date-input" class="col-sm-2 col-form-label">Date</label>
      <div class="col-10">
        <input v-model="addEmployeePayload.birth_date" class="form-control" type="date" value="2011-08-19">
      </div>
        <label for="example-date-input" class="col-sm-2 col-form-label">Position</label>
        <div class="col-sm-10" >
        <select class="form-control" id="category" v-model="addEmployeePayload.PositionId">
            <option disabled value ="">Please select one</option>
            <option value="1">System Analyst</option>
            <option value="2">BPS</option>
            <option value="3">Programmer</option>
            <option value="4">Tester</option>
            <option value="5">Helpdesk</option>
        </select>
        </div>
    <label for="inputPassword" class="col-sm-2 col-form-label">NIP</label>
    <div class="col-sm-10">
      <input v-model="addEmployeePayload.Id_number" class="form-control" placeholder="NIP">
    </div>
    <label for="example-date-input" class="col-sm-2 col-form-label">Jenis Kelamin</label>
        <div class="col-sm-10" >
        <select class="form-control" id="category" v-model="addEmployeePayload.gender">
            <option disabled value ="">Please select one</option>
            <option value="1">Pria</option>
            <option value="2">Wanita</option>
        </select>
        </div>
  </div>
  <div class="buttonedit">
    <button @click.prevent="backHome" class="button-kiri btn btn-warning">kembali</button>
    <button @click.prevent="addEmployee" class="button-kanan btn btn-dark">simpan</button>
  </div>
</form>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'AddFormEmployee',
  data () {
    return {
      addEmployeePayload: {
        nama: '',
        birth_date: '',
        Id_number: '',
        gender: '',
        PositionId: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    addEmployee () {
      this.$store.dispatch('addEmployee', this.addEmployeePayload)
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
            this.addEmployeePayload.nama = ''
            this.addEmployeePayload.birth_date = ''
            this.addEmployeePayload.Id_number = 0
            this.addEmployeePayload.gender = 0
            this.addEmployeePayload.PositionId = 0
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
  },
  created () {
    this.$store.dispatch('getEmployees')
  }
}
</script>

<style>
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
