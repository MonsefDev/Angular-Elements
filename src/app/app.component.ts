import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'widget';
  ngOnInit() {
    const content = document.getElementById('widgetcontent');
    content.innerHTML = '<app-widget-content input_country="ch" input_language="it" input_brand="DS"></app-widget-content>';
    /*const widgetconnexion = document.getElementById('widgetconnexion');
    widgetconnexion.innerHTML = '<app-widget-connexion></app-widget-connexion>';*/
  }
}
