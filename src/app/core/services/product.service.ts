import { Injectable } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct(id: string) {
    return ajax.getJSON(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}


