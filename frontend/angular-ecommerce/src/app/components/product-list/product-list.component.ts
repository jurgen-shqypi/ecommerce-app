import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CartItem } from 'src/app/common/cart-item';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
    
  }

  listProducts(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode){
      this.handleSearchProducts();
    } else {
      this. handleListProducts();
    }

    
    
  }

  handleSearchProducts() {
    const theKeyword: string = String(this.route.snapshot.paramMap.get('keyword'));
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }

  handleListProducts(){
    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');
    if(hasCategoryId){
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = Number(this.route.snapshot.paramMap.get('id'));
    } else {
      this.currentCategoryId = 1;
    }

    //
    //  Check if we have a different category than previous
    //

    // if we have a different category id than previous
    // than set thePageNumber back to 1
    if(this.previousCategoryId != this.currentCategoryId){
      this.thePageNumber = 1
    }

    this.previousCategoryId = this.currentCategoryId;

    this.productService.getProductListPaginate(this.thePageNumber - 1,
                                              this.thePageSize,
                                              this.currentCategoryId)
                                              .subscribe(
                                                data => {
                                                  this.products = data._embedded.products;
                                                  this.thePageNumber = data.page.number + 1;
                                                  this.thePageSize = data.page.size;
                                                  this.theTotalElements = data.page.totalElements;
                                                }
                                              );
    }

    addToCart(theProduct: Product){
      const theCartItem = new CartItem(theProduct);

      this.cartService.addToCart(theCartItem);
      console.log("productList")
    }
}


