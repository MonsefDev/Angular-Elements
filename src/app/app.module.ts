import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetContentComponent } from './mym-components/widget/widget-content/widget-content.component';
import { createCustomElement } from '@angular/elements';
import { MymHeaderComponent } from './mym-components/common/mym-header/mym-header.component';
import { WidgetConnexionComponent } from './mym-components/widget/widget-connexion/widget-connexion.component';
import { MymFooterComponent } from './mym-components/common/mym-footer/mym-footer.component';
import { MyMarqueComponent } from './mym-components/common/mym-footer/my-marque/my-marque.component';
import { MyCarComponent } from './mym-components/common/mym-footer/my-car/my-car.component';
import { HelpComponent } from './mym-components/common/mym-footer/help/help.component';
import { SocialMediaComponent } from './mym-components/common/mym-footer/social-media/social-media.component';


@NgModule({
  declarations: [
    AppComponent,
    WidgetContentComponent,
    MymHeaderComponent,
    WidgetConnexionComponent,
    MymFooterComponent,
    MyMarqueComponent,
    MyCarComponent,
    HelpComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [WidgetContentComponent, WidgetConnexionComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const bodyWidget = createCustomElement(WidgetContentComponent, { injector });
    customElements.define('app-widget-content', bodyWidget);
  }
  ngDoBootstrap() { }
}
