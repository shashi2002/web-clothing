import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  prod!: Product;
  items: Array<Product>= new Array<Product>();
  constructor() { }
}
