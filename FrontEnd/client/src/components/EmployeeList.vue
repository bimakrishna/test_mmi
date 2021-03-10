<template>
      <tr>
      <th scope="row">{{employee.id}}</th>
      <td>{{employee.nama}}</td>
      <td>{{birthDateInString}}</td>
      <td>{{employee.Position.nama}}</td>
      <td>{{employee.Id_number}}</td>
      <td v-if="employee.gender === 2">Wanita</td>
      <td v-else>Pria</td>
      <td> <i @click="editEmployeeForm" class='fas fa-pen-square' style='font-size:24px'></i> <i @click.prevent="deleteEmployee" class='fas fa-trash-alt' style='font-size:24px'></i></td>
    </tr>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  name: 'EmployeeList',
  props: ['employee', 'positions'],
  methods: {
    deleteEmployee () {
      Swal.fire({
        title: 'Konfirmasi',
        text: 'Apakah anda akan menghapus data ini?',
        showCancelButton: true,
        confirmButtonText: 'Delete'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire('delete sukses')
            this.$store.dispatch('getEmployees')
            return this.$store.dispatch('deleteEmployee', this.employee.id)
          }
        })
        .then(() => {
          this.$store.dispatch('getEmployees')
          return this.$store.state.positions
        })
        .catch((err) => {
          console.log(err)
        })
    },
    editEmployeeForm () {
      this.$store.commit('insertEditEmployeeValue', this.employee)
      this.$router.push(`/${this.employee.id}`)
    }
  },
  created () {
    this.$store.dispatch('getEmployees')
  },
  computed: {
    birthDateInString () {
      let penampung = ''
      const hasil = []
      const bulan = [
        [1, 'Januari'],
        [2, 'Februari'],
        [3, 'Maret'],
        [4, 'April'],
        [5, 'Mei'],
        [6, 'Juni'],
        [7, 'Juli'],
        [8, 'Agustus'],
        [9, 'September'],
        [10, 'Oktober'],
        [11, 'November'],
        [12, 'Desember']
      ]
      let selesai = ''
      for (let i = 0; i <= this.employee.birth_date.length; i++) {
        if (this.employee.birth_date[i] === '-') {
          hasil.push(penampung)
          penampung = ''
        }
        if (i === this.employee.birth_date.length) {
          hasil.push(penampung)
          penampung = ''
        } if (this.employee.birth_date[i] !== '-') {
          penampung += this.employee.birth_date[i]
        }
      }
      for (let j = 0; j < bulan.length; j++) {
        if (Number(hasil[1]) === bulan[j][0]) {
          hasil[1] = bulan[j][1]
        }
      }
      selesai = hasil.reverse()
      return `${selesai[0]} ${selesai[1]} ${selesai[2]}`
    }
  }
}
</script>

<style>

</style>
