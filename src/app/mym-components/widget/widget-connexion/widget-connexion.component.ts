import { Component, OnInit, Input } from '@angular/core';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-widget-connexion',
  templateUrl: './widget-connexion.component.html',
  styleUrls: ['./widget-connexion.component.css']
})
export class WidgetConnexionComponent implements OnInit {

  @Input() input_country;
  @Input() input_language;
  @Input() input_brand;

  constructor(public setup: SetupService) { }

  ngOnInit() {
    this.setup.country = this.input_country;
    this.setup.language = this.input_language;
    this.setup.brand = this.input_brand;
  }
}
