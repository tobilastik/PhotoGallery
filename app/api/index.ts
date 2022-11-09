import axios from 'axios'

const API_URL = "https://api.mocki.io/v2/0de5018a/getGallery";


async function loadGallery() {
  try {
      const responseData = await axios.get(API_URL)
      return responseData.data.message
    } catch (error) {
      console.log('error', error);
    }
}

export { loadGallery};