  import { Component, OnInit } from '@angular/core';
  import {JwtHelperService} from "@auth0/angular-jwt";
  import {User} from "../../models/user.model";

interface currentUser {
  role: string;
  name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  constructor(private jwtHelper: JwtHelperService) {
  }
  public currentUser : User |any;
  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.currentUser = this.jwtHelper.decodeToken(token);
    }
    console.log("haniii2", this.currentUser.user);

  }
}
