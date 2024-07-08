import { Component } from '@angular/core';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  accessories:Product[] | undefined;
  prod!: Product;
  prodShow:boolean = false ;
  constructor(){
    // this.accessories =[
    //   {
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },
    //   {
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },{
    //     name:"",
    //     brand:"",
    //     desc:"",
    //     img:"",
    //     price:,
    //     type:"accessories",
    //   },
    // ]
  }
  show(product:Product){
    window.scrollTo(0,0);
    this.prod=product;
    this.prodShow=true;
  }
}
