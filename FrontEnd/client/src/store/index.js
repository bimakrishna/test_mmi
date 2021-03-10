import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees: [],
    positions: '',
    editEmployeeValue: {}
  },
  mutations: {
    insertEmployees (state, payloads) {
      state.employees = payloads
    },
    insertPositions (state, payloads) {
      state.positions = payloads
    },
    insertEditEmployeeValue (state, payloads) {
      state.editEmployeeValue = payloads
    }
  },
  actions: {
    getEmployees (context) {
      axios({
        method: 'GET',
        url: '/'
      })
        .then(result => {
          context.commit('insertEmployees', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getPosition (context) {
      axios({
        method: 'GET',
        url: '/position'
      })
        .then(result => {
          context.commit('insertPositions', result.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    addEmployee (context, payload) {
      return axios({
        method: 'POST',
        url: '/',
        data: {
          nama: payload.nama,
          birth_date: payload.birth_date,
          Id_number: payload.Id_number,
          gender: payload.gender,
          PositionId: payload.PositionId
        }
      })
    },
    deleteEmployee (context, id) {
      return axios({
        method: 'DELETE',
        url: '/' + id
      })
    },
    editEmployee (context, payload) {
      return axios({
        method: 'PUT',
        url: '/' + payload.id,
        data: {
          nama: payload.nama,
          birth_date: payload.birth_date,
          Id_number: payload.Id_number,
          gender: payload.gender,
          PositionId: payload.PositionId
        }
      })
    }
  },
  modules: {
  }
})
