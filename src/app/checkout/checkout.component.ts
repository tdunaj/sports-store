import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl } from '@angular/forms';

import { Order } from '../order';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  public orderSent: boolean = false;
  public submitted: boolean = false;

  constructor(public productService: ProductService,
              public order: Order) { }


  submitOrder(form: any):void {
    this.submitted = true;
    
    if(form.valid) {
      this.productService.saveOrder(this.order).subscribe(
        order => {
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
      });
    }
  }

  ngOnInit() {
  }

}
