import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public selectedCountry;
  public url;
  public CountryName;
  constructor(private http: HttpClient) { }
  getApiData(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
    /*https://restcountries.eu/rest/v2/name/india?fullText=true */
  }

  updateTemplate(country){
  this.CountryName=country;
	  if(this.CountryName){
	  	this.url = 'https://restcountries.eu/rest/v2/name/'+ this.CountryName + '?fullText=true';
	    return this.http.get(this.url);
	  }
  };

}
