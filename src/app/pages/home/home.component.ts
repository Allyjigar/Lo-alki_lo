import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(public productsService: ProductsService, public router : Router) {
    
    console.log(this.productsService.product)

  }



  ngOnInit(): void {
    console.log("Anuncio")
    this.productsService.getProducts().subscribe((data: Products[]) => {
      this. productsService.product = data[0];
      this. productsService.products = data;
    })
  }
  detalleAnuncio(index :number) {
    //this.productsService.product = product;
    
    this.productsService.product = this.productsService.products[index];
    this.router.navigate(["/anuncio",index])
    
  }

}
