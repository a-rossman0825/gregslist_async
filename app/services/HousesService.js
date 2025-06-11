import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";


class HousesService {
  
  async getHouses() {
    const res = await api.get('api/houses');
    console.log('🦮🏠GOT Houses', res.data);
    const houses = res.data.map(pojo => new House(pojo));
    AppState.houses = houses;
  }

  showHousesForm() {
    const form = document.getElementById('houses-form');
    const img = document.getElementById('houses-img');
    const btn = document.getElementById('show-houses-btn');
    form.classList.toggle('d-none');
    img.classList.toggle('d-none');
    if (btn.classList.contains('listing')) {
      btn.innerText = 'Close Form';
      btn.classList.remove('listing');
    } else {
      btn.innerText = 'List A House';
      btn.classList.add('listing');
    }

  }

  async createHouse(houseData) {
    const res = await api.post('api/houses', houseData);
    console.log('🦮🏠📩Created House', res.data);
    const newHouse = new House(res.data);
    AppState.houses.push(newHouse);
  }

  async deleteHouse(houseId) {
    const res = await api.delete(`api/houses/${houseId}`);
    console.log('🦮🏠🗑️✅Deleted House', res.data);
    const houses = AppState.houses;
    const houseI = houses.findIndex((house) => house.id == houseId);
    houses.splice(houseI, 1);
  }
}

export const housesService =  new HousesService();