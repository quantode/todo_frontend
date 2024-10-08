import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HardcodedAuthenticationService} from "../service/hardcoded-authentication.service";
import {BasicAuthenticationService} from "../service/basic-authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
constructor(private router: Router, private BasicAuthenticationService: BasicAuthenticationService) {
}
username=""
  password=""
  errorMessage="invalid credentials"
  invalidLogin=false
  //Dependency Injection

ngOnInit() {
}

handleLogin(){

this.BasicAuthenticationService.ExecuteJWTAuthentication(this.username, this.password).subscribe({next:(res)=>{
    this.router.navigate(['welcome', this.username])
    this.invalidLogin=false
  },

error:(error=> {
    this.invalidLogin = true
    console.log("invalid credentials" +this.invalidLogin)
  }
)
})

}



}
