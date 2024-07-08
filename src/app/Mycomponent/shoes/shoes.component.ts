import { Component } from '@angular/core';
import { DataTransferService } from 'src/app/data-transfer.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {
  shoes:Product[] | undefined;
  prod!: Product;
  prodShow:boolean = false ;
  constructor(private ser:DataTransferService){
    this.shoes = [{
      name:"Sparx Mens Sd0734g Sneaker",
      brand:"Sparx",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61++1-R25gL._UX695_.jpg",
      price:12.74,
      type:"shoe",
    },{
      name:"Adidas Vs Pace 2.0 Men Casual Sneakers",
      brand:"Adidas",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71gJHCfnjAL._UX695_.jpg",
      price:38.40,
      type:"shoe",

    },{
      name:"US Polo Association Mens Abor Sneakers",
      brand:"US Polo Association",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71m+EGqdJ0L._AC_UL600_FMwebp_QL65_.jpg",
      price:13.00,
      type:"shoe",
    },{
      name:"Centrino Mens 3323-23 Sneaker",
      brand:"Centrino",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/711W65Z86aL._UY695_.jpg",
      price:25.00,
      type:"shoe",
    },{
      name:"Puma Mens Melanite Slip on Walking Shoe",
      brand:"Puma",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61fOIETsTIL._UY695_.jpg",
      price:34.89,
      type:"shoe",
    },{
      name:"Bacca Bucci Men's Fashion Sneakers for Mens",
      brand:"Bacca Bucci",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71z74kEjLbS._AC_UL600_FMwebp_QL65_.jpg",
      price:45.81,
      type:"shoe",
    },{
      name:"Layasa Men's Sneakers Walking Shoe",
      brand:"Layasa",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/51pZCX2R3XL._UY695_.jpg",
      price:14.00,
      type:"shoe",
    },{
      name:"Red Tape Sneaker Casual Shoes for Men",
      brand:"Red Tape",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61R9kxi3VBL._UY625_.jpg",
      price:16.90,
      type:"shoe",
    },{
      name:"Woodland Men's Leather Casual Shoes",
      brand:"Woodland",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/81VyD3YqX4L._UX695_.jpg",
      price:29.00,
      type:"shoe",
    },{
      name:"U.S. POLO ASSN. Mens Kenna Sneaker",
      brand:"U.S. POLO ASSN",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/810D7hspHqL._UY695_.jpg",
      price:55.00,
      type:"shoe",
    },{
      name:"ASICS Men's Gel-Quantum 180 VII Black",
      brand:"ASICS",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/61PyPnlpcVL._UX695_.jpg",
      price:105.60,
      type:"shoe",
    },{
      name:"U.S. POLO ASSN. Mens Erland 2.0 Sneaker",
      brand:"U.S. POLO ASSN",
      desc:"The Premium Comfort Athletic Sneaker is the epitome of style and functionality. Designed for both fashion-conscious individuals and active enthusiasts, these sneakers offer the perfect blend of comfort, performance, and aesthetics.",
      img:"https://m.media-amazon.com/images/I/71JLBrXFhCL._UY695_.jpg",
      price:40.54,
      type:"shoe",
    },];
  }
  show(product:Product){
    window.scrollTo(0,0);
    this.prod=product;
    this.prodShow=true;
  }
  addCart(p:Product){
    this.ser.items.push(p);
  }
}
