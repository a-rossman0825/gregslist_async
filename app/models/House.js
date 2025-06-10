import { AppState } from "../AppState.js";


export class House {
  constructor(data) {
    this.id = data.id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.imgUrl = data.imgUrl || 'https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=170667a&w=0&k=20&c=Q7gLG-xfScdlTlPGFohllqpNqpxsU1jy8feD_fob87U=';
    this.year = data.year;
    this.price = data.price;
    this.description = data.description || '';
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);

    this.creatorId = data.creatorId;
    this.creatorName = data.creator.name
    this.creatorPicture = data.creator.picture || 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhdHxlbnwwfHwwfHx8MA%3D%3D'
  }

  get houseHTMLTemplate() {
    return `
      <div class="col-md-6">
        <div class="position-relative shadow car-card" style="border-color: #000000">
          <img src="${this.imgUrl}" alt="${this.creatorName}'s House" class="car-img">
          <span class="car-money d-inline-block px-3 py-1 bg-dark text-success fs-2">$${this.price.toLocaleString()}</span>
          <div class="p-3">
            <h2 class="mb-3">${this.bedrooms}<small>bd</small>/${this.bathrooms}<small>ba</small> ${this.levels} story house</h2>
            <p>
            <p class="fs-4 fw-bold">${this.year} <span class="mdi mdi-clock-time-four-outline"></span></p>
              ${this.description}
            </p>
            <div class="d-flex justify-content-between align-items-end">
              <div>
                <img
                  src="${this.creatorPicture}"
                  alt="${this.creatorName}'s profile picture" class="creator-img">
                <p class="mb-0"${this.creatorName}</p>
              </div>
              <div>
                ${this.deletebutton}
                <small>Listed on: ${this.createdAt.toLocaleDateString()}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }

  get deletebutton() {
    const identity = AppState.identity;
    if (identity == null) {
      return '';
    }
    
    if (identity.id != this.creatorId) {
      return '';
    }

    return `
      <button onclick="app.housesController.confirmDelete('${this.id}')" class="btn btn-outline-danger" type="button">Delete House</button>
    `
  }

}


