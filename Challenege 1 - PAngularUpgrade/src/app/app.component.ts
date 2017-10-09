import {Component, OnInit, Inject} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';

@Component({
  selector: 'app-root',
  template: `      
    <main></main>
  `,
})
export class AppComponent implements OnInit{
  private upgrade: UpgradeModule;

  constructor(upgrade: UpgradeModule) {
    this.upgrade = upgrade;
  }

  ngOnInit(): void {
    this.upgrade.bootstrap(document.body, ['phonecatApp']);
  }
}
