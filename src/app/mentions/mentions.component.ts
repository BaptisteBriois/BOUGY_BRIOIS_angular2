import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'abbb-mentions',
  templateUrl: './mentions.component.html',
  styleUrls: ['./mentions.component.css']
})
export class MentionsComponent implements OnInit {
  text='Bonjour, mentions légales';
  constructor() { }

  ngOnInit() {
  }

}
