import { Component, OnInit } from '@angular/core';
import { SetupService } from 'src/app/services/setup.service';

@Component({
  selector: 'app-mym-header',
  templateUrl: './mym-header.component.html',
  styleUrls: ['./mym-header.component.css']
})
export class MymHeaderComponent implements OnInit {

  public brandInfo: any;
  public country;
  public language;
  public brand;
  constructor(private setupservice: SetupService) {
  }

  ngOnInit() {
    this.brandInfo = this.setupservice.getBrandUrl(this.setupservice.country, this.setupservice.language, this.setupservice.brand);
  }
}
