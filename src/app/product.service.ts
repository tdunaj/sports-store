import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Http, Request, RequestMethod } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';
import "rxjs/add/operator/map";

import { Product } from './product';
import { PRODUCTS } from './temp-data-source';
import { Order } from './order';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

 
@Injectable()
export class ProductService {
  private productsUrl = 'api/products'; 

  getProducts(): Observable<Product[]> {    
    return this.http.get<Product[]>(this.productsUrl)
    // return this.http.request(new Request({ 
    //             method: RequestMethod.Get, 
    //             url: this.productsUrl})).map(response => response.json());
  }
  
  getProduct(id: number): Observable<Product> {    
    const url = `${this.productsUrl}/${id}`;
    //return of();
    return this.http.get<Product>(url);
  }

  getCategories(): string[] {
    return PRODUCTS.map(p => p.category)
        .filter((c, index, array) => array.indexOf(c) === index).sort();
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order));
    return from([order]);
  }

  constructor(private http: HttpClient) { }

}

// getProducts(category:string = null): Product[] {
  //   if (category === null)
  //     return PRODUCTS;
  //   else
  //     return PRODUCTS.filter(p => p.category === null || p.category === category);
  // }
