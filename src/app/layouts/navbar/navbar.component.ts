import { Component, OnInit } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";
import {User} from "../../models/user.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private jwtHelper: JwtHelperService) {
  }
  public currentUser : User |any;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.currentUser = this.jwtHelper.decodeToken(token);
    }
   // console.log("haniii2", this.currentUser.user);

  }

  handleLogout() {
    this.currentUser=null;
    localStorage.removeItem("token");
    window.location.href="/";
  }
}
