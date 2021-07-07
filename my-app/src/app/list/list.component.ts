import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: any;

  constructor(private http: HttpService) {
   }

  ngOnInit(): void {
    this.http.getBeer().subscribe(data => {
      this.brews = data
      // this.brews.forEach(function (value: any) {
      //   console.log(value);
      // });
      console.log(this.brews.endpoints);
    })
  }

}
