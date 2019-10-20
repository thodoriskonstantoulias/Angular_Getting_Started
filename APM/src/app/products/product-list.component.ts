import { Component, OnInit } from '@angular/core';
import {IProducts} from './product';
import { filter } from 'minimatch';

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
    _listFilter : string ;
    get listFilter() : string{
        return this._listFilter;
    } 
    set listFilter(value : string) {
       this._listFilter = value;
       this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products
    } 

    filteredProducts : IProducts[];
    products : IProducts[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2019",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

    toggleImage() : void {
        this.showImage = !this.showImage;
    }
    ngOnInit() : void{
        console.log("In OnInit");
    }

    constructor(){
        this.filteredProducts = this.products;
        this.listFilter = "cart";
    }

    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(message : string) : void{
        this.pageTitle = "Product List : " + message;
    }
}