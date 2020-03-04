import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  public modalOpen = false;
  public items = [
    { title: 'Why is the sky blue?', content: 'The sky is blue because it is!' },
    { title: 'What does an orange taste like?', content: 'An orange tastes like an orange...' },
    { title: 'What colour is that cat?', content: 'The cat is a blue colour.' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onModalToggle() {
    this.modalOpen = !this.modalOpen;
  }
}
