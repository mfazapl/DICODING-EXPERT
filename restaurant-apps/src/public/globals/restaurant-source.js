import API_ENDPOINT from './api-endpoint';

class restaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async restoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async restaurantFavorite(reviewData) {
    try {
      const requestOption = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reviewData),
      };

      const response = await fetch(API_ENDPOINT.ADD_REVIEW, requestOption);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.log('Error:', error);
      throw new Error('Failed to submit review.');
    }
  }
}

export default restaurantSource;
