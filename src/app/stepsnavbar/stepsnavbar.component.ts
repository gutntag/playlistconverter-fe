import { Component, OnInit } from '@angular/core';
import { WizardService } from '../wizard.service';

@Component({
  selector: 'app-stepsnavbar',
  templateUrl: './stepsnavbar.component.html',
  styleUrls: ['./stepsnavbar.component.css']
})
export class StepsnavbarComponent implements OnInit {

  constructor(private wizardService: WizardService) { }

  public isUserDataComplete(): boolean {
    return this.wizardService.isUserDataComplete();
    // return this.userDataComplete;
  }

  public isPlaylistSelectionComplete(): boolean {
    return this.wizardService.isPlaylistSelectionComplete();
  }

  public isPlaylistsTransferComplete(): boolean {
    return this.wizardService.isPlaylistsTransferComplete();
  }

  ngOnInit() {
  }

}
