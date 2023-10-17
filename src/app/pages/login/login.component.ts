import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public user : any;
  public password : any;
  constructor(public router: Router) { }

  ngOnInit() {}
  
  goToHome(){
    this.router.navigate(['home']);
  }

  // -------- ACTION SHOW && UNSHOW PASSWORD -------- \\
  bool_show_password : boolean = false;
  icon_password : any = "eye";
  show_password(){
    if (this.icon_password == "eye"){
      this.icon_password = "eye-off";
      this.bool_show_password = true;  
    } else {
      this.icon_password = "eye"
      this.bool_show_password = false;  
    }
  }

  async recovery(){

  }

  // -------- LOGIN FUNCTIONS -------- \\
  login(){
    this.router.navigate(['home']);
  }

  register(){
    this.router.navigate(['register']);
  }
}
