import axios from 'axios';
const BASE_URL ='api.mocki.io/v2/0de5018a/getGallery';


export async function request(
  onResponse: any,
  data: [],
  type: string,
) {
  if (type == 'GET') {
    try {
      const response = await axios.get(`${BASE_URL}`);
      onResponse.success(response.data);
    } catch (error: any) {
      onResponse.error(error);
    }
  }
  
}
