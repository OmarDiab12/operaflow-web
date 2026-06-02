import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { OperaflowDataService } from '../../core/services/operaflow-data.service';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { StatusPillComponent } from '../../shared/components/status-pill/status-pill.component';

@Component({
  selector: 'app-customers',
  imports: [MatButtonModule, MatIconModule, PageHeaderComponent, StatusPillComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  readonly data = inject(OperaflowDataService);
}
