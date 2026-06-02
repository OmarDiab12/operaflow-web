import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-page-header',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
  readonly eyebrow = input('Operaflow');
  readonly title = input.required<string>();
  readonly description = input.required<string>();
  readonly actionLabel = input('Export view');
  readonly actionIcon = input('download');
}
