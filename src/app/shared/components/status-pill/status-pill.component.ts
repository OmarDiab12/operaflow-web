import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-status-pill',
  templateUrl: './status-pill.component.html',
  styleUrl: './status-pill.component.scss',
  host: {
    '[class]': 'tone()',
  },
})
export class StatusPillComponent {
  readonly status = input.required<string>();

  readonly tone = computed(() => this.status().toLowerCase().replaceAll(' ', '-'));
}
