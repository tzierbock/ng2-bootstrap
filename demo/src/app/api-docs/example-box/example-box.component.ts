/**
 * @author ng-team
 * @copyright ng-bootstrap
 */
import { Component, Input } from '@angular/core';
import { Analytics } from '../analytics/analytics';

@Component({
  selector: 'ngbd-example-box',
  templateUrl: './example-box.component.html'
})
export class ExampleBoxComponent {
  @Input() public demoTitle: string;
  @Input() public component: string;
  @Input() public demo: string;
  @Input() public snippets: Object;
  private showCode:boolean = false;
  private _analytics: Analytics;

  public constructor(_analytics: Analytics) {
    this._analytics = _analytics;
  }

  public toggleCode(): void {
    this.showCode = !this.showCode;
    if (!this.showCode) {
      return;
    }

    this._analytics.trackEvent('Demo code view', this.demoTitle);
  }
}