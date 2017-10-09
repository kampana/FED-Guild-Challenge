declare var angular;
import { Component, OnInit, Input } from '@angular/core';
import { downgradeComponent } from '@angular/upgrade/static';

@Component({
  selector: 'angular-entry-point',
  template: `
  <div id="entry-point">
    <p>Angular 4 Entry Point, Member in NG4: {{ myInput }} </p>
    <p-angular-upgrade [myInput]="myInput" ></p-angular-upgrade>
  </div>
  `
})
export class AngularEntryPoint implements OnInit {
  @Input() myInput: any;

  constructor() { }

  ngOnInit() {
  }
}



angular.module('phonecatApp')
  .directive(
  'angularEntryPoint',
  downgradeComponent({ component: AngularEntryPoint })
  );
