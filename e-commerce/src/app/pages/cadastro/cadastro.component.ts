/* eslint-disable no-underscore-dangle */
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { InventoryService } from '../../services/inventory/inventory.service';
import { CustomValidators } from '../../classes/custom-validators';
import { IProductListing } from '../../models/iproduct-listing';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent {
  public productForm = this._nfb.group(
    {
      productId: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
      name: ['', [Validators.required, Validators.pattern(/[A-Za-z 0-9]+$/)]],
      price: ['', [Validators.required, CustomValidators.isNumeric]],
      quantity: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]],
    },
  );

  constructor(
    private readonly _auth: AuthService,
    private readonly _nfb: NonNullableFormBuilder,
    private readonly _inventory: InventoryService,
  ) { }

  public updateInventory(): void {
    if (this.productForm.valid) {
      const {
        productId, price, quantity, name,
      } = this.productForm.controls;
      const formattedPrice = price.value!
        .replaceAll('.', '')
        .replace(',', '.');
      const product: IProductListing = {
        productId: Number(productId.value),
        price: Number(formattedPrice),
        quantity: Number(quantity.value),
        name: name.value,
        creator: this._auth.currentUserEmail,
      };
      this._inventory.addProduct(product);
      console.log(this._inventory.inventory);
    }
  }
}
