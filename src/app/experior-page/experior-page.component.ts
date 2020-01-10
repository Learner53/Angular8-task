import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';
@Component({
  selector: 'app-experior-page',
  templateUrl: './experior-page.component.html',
  styleUrls: ['./experior-page.component.css']
})
export class ExperiorPageComponent implements OnInit {
  public apiData;

  public url;
  public selectedCountryData;
  
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.getApiData();
  }
  getApiData(){
    this._apiService.getApiData().subscribe(
      data=> {
        this.apiData= data;
        console.log(this.apiData);
      }
    )
  }
  getCountryName(country){
    this._apiService.updateTemplate(country).subscribe(
      data=> {
        this.selectedCountryData= data;
        console.log(this.selectedCountryData);
      }
    )
  }
}
