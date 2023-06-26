import restaurantSource from '../globals/restaurant-source';

const home = {
  async render() {
    return `
    <!-- Jumbotron -->
    <div class="hero">
        <div class="heroinner">
            <h1 class="herotitle">Restaurant</h1>
            <p class="herosubtitle">Find the best restaurants only on the best websites.</p>
        </div>
        </div>
    </div>
    <!-- Content -->
    <main id="main-content" tabindex="1">
        <section class="content">
            <div class="latest">
                <h1>Explore Restaurant</h1>
            </div>

            <div class="card-list"></div>
        </section>
    </main>
            `;
  },

  async afterRender() {
    const containerClassList = document.querySelector('.card-list');
    try {
      const restaurants = await restaurantSource.listRestaurant();
      restaurants.forEach((restaurant) => {
        const {
          name, pictureUrl, rating, description,
        } = restaurant;
        const restaurantElement = document.createElement('div');
        restaurantElement.classList.add('containerCard');
        restaurantElement.innerHTML = `
          <img src="${pictureUrl}" alt="${name}">
          <div class="container">
            <h1>${name}</h1>
            <h1>Rating: ${rating}</h1>
            <p>${description}</p>
          </div>
        `;
        containerClassList.appendChild(restaurantElement);
      });
    } catch (error) {
      console.log('Error:', error);
      containerClassList.innerHTML = 'Failed to fetch restaurant data.';
    }
  },
};

export default home;
