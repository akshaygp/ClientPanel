import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Settings } from '../../models/Settings';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(
    private flashMessage: FlashMessagesService,
    private router: Router,
    private settingsService: SettingsService 
  ) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessage.show('Settings Saved', {
      cssClass: 'alert-success', timeout: 4000
    });
  }

}
