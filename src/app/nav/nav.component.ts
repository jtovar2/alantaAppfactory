import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  title = 'alantaAppfactory';

  router : Router

  constructor(this_other_router: Router)
  {
  	this.router = this_other_router;

  }
  ngOnInit() {
  }

}
