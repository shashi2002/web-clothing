import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/data-transfer.service';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  clothings: Product[] | undefined;
  // por:clothings[1];
  prod!: Product;
  prodShow:boolean = false ;
  // @Input() product: Product | undefined;
  constructor(private ser:DataTransferService){
    this.clothings=[
      {
        name:"EYEBOGLER Regular Men's Cotton Designer T-Shirt",
        brand:"EYEBOGLER store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/51erlDVGq1L._AC_UL600_FMwebp_QL65_.jpg",
        price:17.00,
        type:"cloth",
      },
      {
        name:"DHRUVI TRENDZ Men Simple Shirt for Men",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/61E+biE5SIL._AC_UL600_FMwebp_QL65_.jpg",
        price:23.58,
        type:"cloth",
      },
      {
        name:"LookMark Men's Poly Cotton Digital Printed ",
        brand:"LookMark store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/717Qr4ImV+L._AC_UL600_FMwebp_QL65_.jpg",
        price:45.8,
        type:"cloth",
      },
      {
        name:"DHRUVI TRENDZ Men Fancy Shirts",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71z2V6TgeoL._AC_UL600_FMwebp_QL65_.jpg",
        price:12.67,
        type:'cloth',
      },
      {
        name:"DENIMHOLIC Men's Cotton Turtle Neck Sweater",
        brand:"DENIMHOLIC store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71mDDeJQUnL._AC_UL600_QL65_.jpg",
        price:19.28,
        type:'cloth',
      },
      {
        name:"Leriya Fashion Shirt for Men",
        brand:"Leriya Fashion",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/51RthiG0RFL._AC_UL600_QL65_.jpg",
        price:2.78,
        type:'cloth',
      },
      {
        name:"NEVER LOSE Mens 2 Pack Polyester Yoga Short Men ",
        brand:"NEVER LOSE store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/31ESWFjUO9L._AC_UL600_QL65_.jpg",
        price:21.78,
        type:'cloth',
      },
      {
        name:"DHRUVI TRENDZ Men Pajama Set",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/61k-h8Q2C1L._AC_UL600_QL65_.jpg",
        price:30.00,
        type:'cloth',
      },
      {
        name:"BoldFit Winter Wear for Women and Men ",
        brand:"BoldFit",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71PgXiVK43L._AC_UL600_QL65_.jpg",
        price:12.78,
        type:'cloth',
      },
      {
        name:"SHAUN Men's Regular Fit Trackapant and Joggers",
        brand:"SHAUN store",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/7166+Wcj6AL._AC_UL600_QL65_.jpg"/*pant*/,
        price:18.28,
        type:'cloth',
      },
      {
        name:"Zexer Men Men Compression T-Shirt Gym ",
        brand:"Zexer",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/51gLonI8VsL._AC_UL600_QL65_.jpg",
        price:18.12,
        type:'cloth',
      },
      {
        name:"DHRUVI TRENDZ Men Fancy Shirts for Men",
        brand:"DHRUVI TRENDZ",
        desc:"A shirt is a type of garment that is worn primarily on the upper part of the body. It is typically made of a lightweight fabric, such as cotton, linen, polyester, or a blend of materials, designed for comfort and breathability. Shirts come in a wide variety of styles, colors, and patterns, making them suitable for various occasions and personal preferences.",
        img:"https://m.media-amazon.com/images/I/71ShBw4g6GL._AC_UL600_QL65_.jpg",
        price:12.78,
        type:'cloth',
      },
    ];
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