import {NgModule, InjectionToken, Inject} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {UpgradeModule, downgradeInjectable, downgradeComponent} from '@angular/upgrade/static';
import {AppComponent} from './app.component';
import { AngularJSComponentDirective } from './angular-jscomponent.directive';
import { AngularEntryPoint } from 'app/angular-entry-point.component';
import { PAngularUpgrade } from 'app/p-angular-upgrade.component';

declare const angular: any;

const app = angular.module('phonecatApp');

@NgModule({
  declarations: [
    AppComponent,
    AngularEntryPoint,
    AngularJSComponentDirective,
    PAngularUpgrade
  ],
  imports     : [
    BrowserModule,
    UpgradeModule
  ],
  entryComponents: [AngularEntryPoint],
  bootstrap   : [AppComponent]
})
export class AppModule {




}
