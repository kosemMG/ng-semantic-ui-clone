import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  public stats = [
    { value: 22, label: 'Number of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];

  public items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'A fantastic couch sit on.'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'A great dresser to put stuff in.'
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
