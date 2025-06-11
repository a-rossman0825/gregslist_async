

class ViewsService {

  
  
  
  
  showSection(section) {
    const landing = document.getElementById('landing');
    const carsTitle = document.getElementById('cars-title');
    const carsBody = document.getElementById('cars-body');
    const housesTitle = document.getElementById('houses-title');
    const housesBody = document.getElementById('houses-body');
    const jobsTitle = document.getElementById('jobs-title');
    const jobsBody = document.getElementById('jobs-body');

    if (section == 'houses') {
      housesTitle.classList.remove('d-none');
      housesBody.classList.remove('d-none');
      landing.classList.remove('landing-bg');
      carsTitle.classList.add('d-none');
      carsBody.classList.add('d-none');
      jobsTitle.classList.add('d-none');
      jobsBody.classList.add('d-none');
    } else if (section == 'cars') {
      carsTitle.classList.remove('d-none');
      carsBody.classList.remove('d-none');
      landing.classList.remove('landing-bg');
      housesTitle.classList.add('d-none');
      housesBody.classList.add('d-none');
      jobsTitle.classList.add('d-none');
      jobsBody.classList.add('d-none');
    } else if (section == 'jobs') {
      jobsTitle.classList.remove('d-none');
      jobsBody.classList.remove('d-none');
      landing.classList.remove('landing-bg');
      housesTitle.classList.add('d-none');
      housesBody.classList.add('d-none');
      carsTitle.classList.add('d-none');
      carsBody.classList.add('d-none');
    } else {
      landing.classList.add('landing-bg');
      housesTitle.classList.add('d-none');
      housesBody.classList.add('d-none');
      carsTitle.classList.add('d-none');
      carsBody.classList.add('d-none');
      jobsBody.classList.add('d-none');
      jobsTitle.classList.add('d-none');
    }
  }

}

export const viewsService = new ViewsService();