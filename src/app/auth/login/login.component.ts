import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });
  constructor() {}

  ngOnInit(): void {}

  onLogin(){
    console.log('this.loginForm.value', this.loginForm.value)
  }
}
