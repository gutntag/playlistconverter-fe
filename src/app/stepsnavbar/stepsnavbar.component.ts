import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepsnavbar',
  templateUrl: './stepsnavbar.component.html',
  styleUrls: ['./stepsnavbar.component.css']
})
export class StepsnavbarComponent implements OnInit {

  userData: boolean = true;
  selectedPlaylists: boolean = false;
  confirmedPlaylists: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
