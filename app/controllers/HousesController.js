import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";


export class HousesController {
  constructor() {
    console.log('🏠🎛️ Ready');
    AppState.on('houses', this.drawHouses);
    AppState.on('identity', this.drawHouses);

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

  async submitHouse() {
    try {
      event.preventDefault();
      const formElm = event.target;
      const houseFormData = getFormData(formElm);
      console.log('🎛️🏠Submitted', houseFormData);
      await housesService.createHouse(houseFormData);
    } catch (error) {
      Pop.error(error, 'ERROR', 'could not create house!');
      console.error('🎛️🏠 createHouse failed', error);
    }
  }

  async confirmDelete(houseId) {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house Forever?', 'No Takesies backsies!!!', 'Yeah, delete that ish', 'nah, jk lol');

    if (!confirmed) {
      return
    }

    try {
      console.log('🎛️🏠🗑️Deleting House', houseId);
      await housesService.deleteHouse(houseId);
    } catch (error) {
      Pop.error(error, '🎛️🏠🗑️❌Could not delete house');
      console.error('🎛️🏠🗑️❌deleteHouse failed', error);
    }
  }

}