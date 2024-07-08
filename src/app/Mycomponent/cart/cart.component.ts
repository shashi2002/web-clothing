import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  prod!:Product;
  items:Array<Product>=new Array<Product>;
  constructor(private ser:DataTransferService){
  }
  ngOnInit(): void {    
    this.items=this.ser.items;
  }
}
