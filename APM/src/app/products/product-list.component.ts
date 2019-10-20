import { Component, OnInit } from '@angular/core';
import {IProducts} from './product';
import { ProductService } from './product.service';



@Component({
    selector : "pm-products",
    templateUrl : "./product-list.component.html",
    styleUrls : ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
    
    pageTitle : string = "Product List";
    imageWidth : number = 50;
    imageMargin : number = 2;
    showImage : boolean = false;
    errorMessage : string;
    _listFilter : string ;
    get listFilter() : string{
        return this._listFilter;
    } 
    set listFilter(value : string) {
       this._listFilter = value;
       this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
    } 

    filteredProducts : IProducts[];
    products : IProducts[] = [];

    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    ngOnInit() : void{
        this.productService.getProducts().subscribe({
            next : products => {
                this.products = products,
                this.filteredProducts = this.products;
            },
            error : err => this.errorMessage = err
        });
        
    }

    constructor(private productService : ProductService){}
 
    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message : string) : void{
        this.pageTitle = "Product List : " + message;
    }
}