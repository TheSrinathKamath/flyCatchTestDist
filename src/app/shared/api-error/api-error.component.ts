import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-error',
  templateUrl: './api-error.component.html',
  styleUrls: ['./api-error.component.scss']
})
export class ApiErrorComponent implements OnInit {
  
  @Input() hasAPIFailed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
