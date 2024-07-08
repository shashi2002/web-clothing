import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Input() from!: string;
  @Output() show:EventEmitter<Product> = new EventEmitter()
  // prod!: Product;
  constructor(){}
  handleClick(product: Product){
    this.show.emit(product)
    // this.prod=product;
  }
}
