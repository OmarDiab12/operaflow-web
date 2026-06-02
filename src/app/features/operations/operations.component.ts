import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { OperaflowDataService } from '../../core/services/operaflow-data.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatusPillComponent } from '../../shared/components/status-pill/status-pill.component';

@Component({
  selector: 'app-operations',
  imports: [MatButtonModule, MatIconModule, MatProgressBarModule, PageHeaderComponent, StatusPillComponent],
  templateUrl: './operations.component.html',
  styleUrl: './operations.component.scss',
})
export class OperationsComponent {
  readonly data = inject(OperaflowDataService);
}
