import { Injectable } from '@angular/core';
import { ProductCategory } from '../model/product-category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  getCategories(): ProductCategory[]{
    return this.categoryList;
  }

  getCategoryById(id: number): ProductCategory{
    return this.categoryList.filter((category) => category.id == id)[0];
  }

  categoryList: ProductCategory[] = [
    { id: 1, categoryName: 'Laptop' },
    { id: 2, categoryName: 'Mobile' },
    { id: 3, categoryName: 'Audio' },
    { id: 4, categoryName: 'Charger & Cables' },
    { id: 5, categoryName: 'Power Banks' },
  ];
}
