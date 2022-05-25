import axios from 'axios';
import { Item, ResponseItems } from '../models/model';

export class ItemService {

    static baseUrl: string = 'http://localhost:3000/api/';
    
    static search():Promise<any>{
      return axios.get(this.baseUrl+'items')
    }

    static getItem(id:string):Promise<Item>{
      return axios.get(this.baseUrl+'items/'+id)
    }

}
