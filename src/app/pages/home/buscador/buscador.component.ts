import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/shared/products.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  public categoria: string;
  public subcategoria: string;
  public precio: number;
  public precio2: number;
  public seleccionCat : string = "";
  public seleccionSub : string = "";
  
  

  constructor(public userService: UsersService, public productsService: ProductsService, public router: Router) {}


  categoriaValue(cat: string) {

    this.categoria = cat;
    this.productsService.getSearchProductCat(this.categoria).subscribe((data: Products[]) => {
      this.productsService.product = data[0];
      this.productsService.products = data;
    })
    this.seleccionCat = cat;
    console.log(cat);
  }

  subcategoriaValue(subcat: string) {
    this.productsService.products = [];
    console.log(this.productsService.products);

    this.subcategoria = subcat;
    this.productsService.getSearchProductSub(this.subcategoria).subscribe((data: Products[]) => {
      // this.productsService.product = data[0];
      this.productsService.products = data;
      
    })
    console.log(this.productsService.products);
    this.seleccionSub = subcat;
    console.log(subcat);
  }


  precioValue(precio: number, precio2: number ) {

    this.precio = precio;
    this.precio2 = precio2;

    this.productsService.getSearchProductPrice(this.precio, this.precio2).subscribe((data: Products[]) => {
      this.productsService.product = data[0];
      this.productsService.products = data;
    })
  }

  ngOnInit(): void {
    // let user = this.userService.userAllPages();


  }
  detalleAnuncio(index: number) {
    //this.productsService.product = product;

    let pos;
    for (let i = 0; i < this.productsService.products.length; i++) {
      if (this.productsService.products[i].product_id == index) {
        this.productsService.product = this.productsService.products[i];
        pos = i;

      }
    }
    this.router.navigate(["/anuncio", pos])

  }



}
