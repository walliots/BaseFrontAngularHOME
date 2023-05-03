import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DashboardModel } from '../models/dashboardBase.model';

@Component({
  selector: 'dashboardBase',
  templateUrl: './dashboardBase.component.html',
  styleUrls: ['./dashboardBase.component.css']
})
export class DashboardBase implements OnInit {

  nameUp = '';
  nameDown = '';

  constructor() { 
  
  }

  ngOnInit(): void {

    this.nameUp = 'up';
    this.nameDown = 'down';

      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });


  }
  myFunction() {
    const element = document.getElementById("logoHide");
    element?.classList.toggle("mystyle");
    console.log('pegou')
  }
}

