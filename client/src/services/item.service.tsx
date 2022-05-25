import axios from 'axios';
import { Item, ResponseItems } from '../models/model';

export class ItemService {

    static baseUrl: string = 'http://localhost:3000/api/';
    
    static search(query:string = 'zapatilla'):Promise<any>{
      return axios.get(this.baseUrl+'items?q='+query)
    }

    static getItem(id:string):Promise<Item>{
      return axios.get(this.baseUrl+'items/'+id)
    }

}
