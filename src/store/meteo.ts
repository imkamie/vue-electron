import { defineStore } from 'pinia'
import axios from 'axios'

export const useMeteoStore = defineStore('meteoStore', {
  state: () => {
    return {
      data: Object,
    }
  },
  actions: {
    async sendDataMeteoApi(userInput: string) {
      let api_key = '4edbab024fbcb63b061a4d16a905571d'

      this.data = await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${api_key}`
        )
        .then((response) => {
          return response.data
        })
        .catch((error) => {
          return error
        })
    },
  },
  getters: {
    getData: (state) => state.data,
  },
})
