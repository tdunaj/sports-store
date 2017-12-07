import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { Cart } from '../cart';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  pageNumbers: number[];
  //pageCount: number;

  pageSize = 4;
  currentPage = 1;

  constructor(private productService: ProductService,
              private cart: Cart) {}

  ngOnInit() {
    this.getProducts();
    this.getCategories();
    //this.categories = this.productService.getCategories();
    
  }

  getProducts(category: string = null): void {
    let pageIndex = (this.currentPage - 1) * this.pageSize;

    this.productService.getProducts().subscribe(
      products => {
        this.products = products.
          filter(p => category === null || category === p.category).
          slice(pageIndex, pageIndex + this.pageSize);
        this.pageNumbers = Array(Math.ceil(products
            .length / this.pageSize)).fill(0).map((x, i) => i + 1);          
      });
  }

  getCategories(): void {
    this.productService.getProducts().subscribe(
      products => this.categories = products.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index).sort()
      );    
  }

  // get pageCount(): number {
  //   return Math.ceil(this.products.length / this.pageSize);
  //     //  .getProducts(this.selectedCategory).length / this.pageSize)
  // }


  onSelect(category: string = null): void {
    this.getProducts(category);    
  }

  changePage(newPage: number) {
    this.currentPage = newPage;
    this.getProducts();
  }

  changePageSize(newSize: number) {
    this.pageSize = newSize;
    this.changePage(1);    
    this.getProducts();    
  }

  addProductToCart(product: Product): void {
    this.cart.addLine(product);
  }
}

      // data => {
      //   this.products = data;
      //   this.categories = data.map(p => p.category)
      //       .filter((c, index, array) => array.indexOf(c) === index)
      //       .sort();
      //   this.pageNumbers = Array(Math.ceil(data
      //     .length / this.pageSize)
      //   ).fill(0).map((x, i) => i + 1);
      // });

      
    //this.products = this.getProducts();
    //this.categories = this.getCategories();
  //}

  // getProducts(): Observable<Product[]> {    
  //   return this.productService.getProducts();
  // }

  // getProducts(category: string = null): Product[] {
  // //getProducts(category: string = null): void {
  //   let pageIndex = (this.currentPage - 1) * this.pageSize;
  //   return this.productService.getProducts().subscribe()
  //   //return this.products
  //   .filter(p => category === null || category === p.category)
  //   .slice(pageIndex, pageIndex + this.pageSize);
  // }

  // get categories(): string[] {
  //   return this.productService.getCategories();
  // }

    // get pageNumbers(): number[] {
  //   console.log('test: ' + this.products);
  //   //return Array(Math.ceil(this.productService.getProducts(this.selectedCategory)
  //   return Array(Math.ceil(this.products
  //     .length / this.pageSize)
  //   ).fill(0).map((x, i) => i + 1);
  // }
