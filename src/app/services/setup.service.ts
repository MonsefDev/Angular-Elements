import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetupService {
  public country;
  public language;
  public brand;


  constructor() { }

  getBrandUrl(country: string, language: string, brand: string): any {
    if (brand === 'AP') {
      return {
        src: 'https://www-test.mym.awsmpsa.com/images/logo/peugeot_logo.png',
        urlbrand: 'https://mypeugeot-fr.peugeot.com '
      };
    } else
      if (brand === 'DS') {
        return {
          src: 'https://www-test.mym.awsmpsa.com/images/logo/ds_logo.png',
          urlbrand: 'https://www.dsautomobiles.fr/myds.html'
        };
      } else if (brand === 'AC') {
        return {
          src: 'https://www-test.mym.awsmpsa.com/images/logo/citroen_logo.png',
          urlbrand: 'https://www.dsautomobiles.fr/myds.html'
        };
      }
  }
}
