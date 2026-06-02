import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { OperaflowDataService } from '../../core/services/operaflow-data.service';

@Component({
  selector: 'app-layout',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss',
})
export class AppLayoutComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly data = inject(OperaflowDataService);

  readonly navItems = this.data.navItems;
  readonly isMobile = signal(false);
  readonly drawerOpened = computed(() => !this.isMobile());

  constructor() {
    this.breakpointObserver.observe('(max-width: 900px)').subscribe((state) => {
      this.isMobile.set(state.matches);
    });
  }
}
