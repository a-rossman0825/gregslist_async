import { viewsService } from "../services/ViewsService.js";


export class ViewsController {
  constructor() {
    console.log('🖥️🎛️ Ready');
  }

  showSection(section) {
    event.preventDefault();
    viewsService.showSection(section);
  }
}