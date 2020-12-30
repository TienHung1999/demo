import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {AuthenticationService} from 'src/app/_services/authentication.service';
import { UserService } from '../_services';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  isShow = false;
  productData: any;
  pro: any;
  constructor(
    private productService: UserService
    
  ) { }

  
  

  ngOnInit(): void {
    this.getProduct()
  }
  getProduct(){
    this.productService.getProduct().subscribe((res) =>{
      this.productData =res;
      console.log(111, res)

    })
    
  }

  getPro(){
    this.productService.getPro().subscribe((res) =>{
      this.productData =res;
      console.log(111, res)

    })
    
  }

  getId(id: number){
    this.productService.getId(id).subscribe((res) =>{
      this.pro =res;

    })
    
  }

  updateItem() {
    alert('sửa thành cong');
  }

  showModal() {
    this.isShow = true
    console.log(this.isShow)
  }
  // test(){
  //   this.authenticationService.test();
  // }


}
