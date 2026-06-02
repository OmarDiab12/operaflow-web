import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { MetricCard } from '../../../core/models/operaflow.models';

@Component({
  selector: 'app-metric-card',
  imports: [MatIconModule],
  templateUrl: './metric-card.component.html',
  styleUrl: './metric-card.component.scss',
  host: {
    '[style.--metric-accent]': 'metric().accent',
  },
})
export class MetricCardComponent {
  readonly metric = input.required<MetricCard>();
}
