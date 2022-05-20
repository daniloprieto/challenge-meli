import { environment } from './../env';
import axios from 'axios';
import { HttpError } from '../shared/error';

const name = environment.AUTHOR_NAME;
const lastname = environment.AUTHOR_LASTNAME;
const AUTHOR_DATA = { author: { name, lastname } };

//endpoints
const urlSearchItems = `${environment.API}sites/MLA/search?q=`;
const urlGetItem = `${environment.API}items/`;

export const searchItems = async(query: string) => {
  return await axios.get(urlSearchItems + query)
  .then((res) => {
    const result = {
      ...AUTHOR_DATA,
      filters: [
        ...res.data.filters
      ],
      items: [
        ...res.data.results
      ]
    };
    return result;
  })
  .catch(function (error) {
    return new HttpError(404, error);
  });
}

export const getItem = async (id: string) => {

  return await axios.all([
    axios.get(urlGetItem + id),
    axios.get(urlGetItem + id + '/description')    
  ])
  .then(axios.spread((item, description) => {
    const result = {
      ...AUTHOR_DATA, 
      item: {
        ...item.data,
        description: {
          ...description.data
        }
      }
    };

    return result;
  }))
  .catch((error) => {
    return new HttpError(404, error);
  });
}