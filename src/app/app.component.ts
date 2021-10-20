import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  cart: Array<number> = [];
  selectedVariant: number = 0
  details = ["neco1", "neco2", "neco3"];
  variants = [
    {
      variantId: 123,
      variantColor: 'green',
      variantQuantity: 12,
      variantImage: "https://cdn.xsd.cz/resize/5215eece94913abc9c08a63c0f79f518_extract=50,0,1959,1102_resize=680,383_.jpg?hash=b932b5d69c0325053506df0b27f036e6"
    },
    {
      variantId: 4444,
      variantColor: 'red',
      variantQuantity: 10,
      variantImage: "https://cdn.myshoptet.com/usr/www.sklenenyshop.cz/user/shop/big/14270_tuplak-na-pivo-isar-1-l.jpg?5eb270f5"
    }
  ]

  updateProduct(index: number) {
    console.log(index)
    this.selectedVariant = index;
  }

  addToCart() {
    const id = this.variants[this.selectedVariant].variantId;
    console.log(id);
    this.cart.push(id);
    this.removeFromStock();
  }

  private removeFromStock() {
    this.variants[this.selectedVariant].variantQuantity--
  }
}
