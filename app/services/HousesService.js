import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js";


class HousesService {
  
  async getHouses() {
    const res = await api.get('api/houses');
    console.log('🎛️🏠GOT Houses', res.data);
    const houses = res.data.map(pojo => new House(pojo));
    AppState.houses = houses;
  }
}

export const housesService =  new HousesService();