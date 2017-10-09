declare var angular;
declare var Utilities;
angular.module('phonecatApp').directive('pAngularUpgrade', ['$compile', function ($compile) {
  return {
    template: 
    `
    <div id="angular-upgrade">
      AngularJS again. Member in JS: {{ myInput }}',
    </div>
    `,
    link: function ($scope, element, attrs) {
    }
  };
}]);

import { OnInit } from '@angular/core';
import { Directive, ElementRef, Injector, SimpleChanges, Input, Host } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({ selector: 'p-angular-upgrade' })
export class PAngularUpgrade extends UpgradeComponent {
  @Input() myInput: any;

  constructor(elementRef: ElementRef, injector: Injector) {
    super('pAngularUpgrade', elementRef, injector);
  }

}

