import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    console.log('🏠🎛️ Ready');
    AppState.on('houses', this.drawHouses);

    this.getHouses();
  }

  async getHouses() {
    try {
        await housesService.getHouses();
    } catch (error) {
      Pop.error(error, 'UH OH!', '<b>Could not get those Houses!</b>')
      console.error('🎛️getHouses failed', error);
    }
  }

  drawHouses() {
    const houses = AppState.houses;
    let housesContent = '';
    houses.forEach((house) => housesContent += house.houseHTMLTemplate);
    const houseListingElm = document.getElementById('house-listings');
    houseListingElm.innerHTML = housesContent;
  }

}