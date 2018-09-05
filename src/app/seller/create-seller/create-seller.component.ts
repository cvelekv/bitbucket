import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ISellerCategory } from '../../models/sellerCategory.model';
import { SellerCategoryService } from '../../services/seller-category.service';

@Component({
  selector: "app-create-seller",
  templateUrl: "./create-seller.component.html",
  styles: [
    `
      em {
        color: #e05c65;
        padding-left: 10px;
      }
      .error input,
      .error select,
      .error textarea {
        background-color: #e3c3c5;
      }
      .error :: -webkit-input-placeholder {
        color: #999;
      }
      .error :: -moz-placeholder {
        color: #999;
      }
      .error :: -ms-input-placeholder {
        color: #999;
      }
    `
  ]
})
export class CreateSellerComponent implements OnInit {
  categoryLookupCollection: Array<any>;
  taxesByCategory: Array<any>;
  taxLookupCollection: Array<any> = []; // TODO: Create Lookup entity.
  newSellerForm: FormGroup;
  category: FormControl;
  tax: FormControl;
  name: FormControl;
  constructor(private sellerCategoryService: SellerCategoryService) {}
  onChangeCategory(value) {
    this.taxLookupCollection = this.taxesByCategory
      .filter(tax => tax.categoryId === +value)
      .map(t => ({
        id: t.id,
        name: t.name
      }));
    this.tax.setValue("");
    this.tax.enable();
  }
  ngOnInit() {
    this.category = new FormControl("", Validators.required);
    this.tax = new FormControl("", Validators.required);
    this.name = new FormControl("", [Validators.required, nameValid]);
    this.newSellerForm = new FormGroup({
      category: this.category,
      tax: this.tax,
      name: this.name
    });
    this.tax.disable();
    const categories: ISellerCategory[] = this.sellerCategoryService.getSellerCategories();
    this.categoryLookupCollection = categories.map(category => ({
      id: category.id,
      name: category.name
    }));
    let taxesNormalized: Array<any> = [];
    categories.forEach(category => {
      const taxesByCategoryTemp = category.taxes.map(tax => ({
        categoryId: category.id,
        id: tax.id,
        name: tax.name
      }));
      taxesNormalized = taxesNormalized.concat(taxesByCategoryTemp);
    });
    this.taxesByCategory = taxesNormalized;
  }

  saveSeller(formValues) {
    console.log(formValues);
  }
}

const nameValid = (control: FormControl): { [key: string]: any } => {
  const firstLetter = control.value.toString()[0];
  return !!firstLetter && firstLetter !== firstLetter.toUpperCase()
    ? { nameValid: "invalid name" }
    : null;
};
