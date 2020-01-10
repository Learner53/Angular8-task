import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-page-listings',
  templateUrl: './page-listings.component.html',
  styleUrls: ['./page-listings.component.css']
})
export class PageListingsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
    gotoHome() {

    this.router.navigate(['home']);
  }
    gotoLanguageList() {

    this.router.navigate(['language-list']);
  }
    gotoCurrencyList() {

    this.router.navigate(['currency-list']);
  }

  ngOnInit() {
  }

}
