import { Injectable } from '@angular/core';
import { IProductListing } from '../../models/iproduct-listing';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  public inventory: IProductListing[] = [
    {
      productId: 1,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 2,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    }, {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    }, {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo',
    },
    {
      productId: 3,
      name: 'pão',
      quantity: 2,
      price: 10,
      creator: 'Marcelo Saaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
  ];

  public getProduct(productId: number): IProductListing | undefined {
    return this.inventory.find((product) => productId === product.productId);
  }

  public addProduct(product: IProductListing): void {
    this.inventory.push(product);
  }

  public get inventorySize(): number {
    return this.inventory.length;
  }
}
