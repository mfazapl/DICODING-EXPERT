import restaurantSource from '../globals/restaurant-source';

const favorite = {
  async render() {
    return `
      <h2> This is favorite </h2>
          `;
  },

  async afterRender() {
    const restoFavorite = await restaurantSource.restaurantFavorite();
    console.log(restoFavorite);
    //
  },

};

export default favorite;
