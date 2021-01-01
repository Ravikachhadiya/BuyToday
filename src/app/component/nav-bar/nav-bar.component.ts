import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductCategory } from 'src/app/model/product-category';
import { User } from 'src/app/model/user';
import { ProductService } from 'src/app/service/product.service';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private categoryService: CategoryService,
    private _snackBar: MatSnackBar,
    private router: Router

  ) { }

  categoryList: ProductCategory[];
  category = "All Categories";
  searchedWord: string;
  login: boolean;
  username: string;

  ngOnInit(): void {
    this.categoryList = this.categoryService.getCategories();
    this.login = localStorage.getItem("login") == "true";
    const user: User = JSON.parse(localStorage.getItem("user"));
    this.username = user.username;
    console.log(this.login);
  }

  selectedCategory(id: number) {
    if (id != 0) {
      this.category = this.categoryService.getCategoryById(id).categoryName;
    }
    else {
      this.category = "All Categories";
    }
  }

  search() {
    console.log("search : " + this.searchedWord);
  }
    
  changeFixPosition() {
    console.log("claas");
    document.getElementById("category-navbar").className = "nav-bar";
  }

  logout() {
    this.openSnackBar("Logout Successfully");
    localStorage.removeItem("user");
    localStorage.setItem("login", "false");
    this.login = false;
    this.router.navigate(['/login']);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, null, {
       duration: 2000,
    });
  } 

  gotoCart() {
    if(this.username != undefined)
      this.router.navigate([this.username, 'cart']);
    else
      this.openSnackBar("Login First");
  }
}
