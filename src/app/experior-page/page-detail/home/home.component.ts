import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/api.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public homeApiData;
  @Input() public countryName;
  constructor(private _apiService: ApiService) { }
  ngOnInit() {
  }
  @Output() public updateHomeTemplateContent() {
    this._apiService.updateTemplate(this.countryName).subscribe(
      data=> {
        this.homeApiData= data;
        console.log(this.homeApiData);
      }
    )
  };

}
