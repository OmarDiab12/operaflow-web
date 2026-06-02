import { Injectable, computed, signal } from '@angular/core';

import {
  ActivityItem,
  Customer,
  InventoryItem,
  MetricCard,
  NavItem,
  Operation,
  ReportItem,
} from '../models/operaflow.models';

@Injectable({ providedIn: 'root' })
export class OperaflowDataService {
  readonly navItems = signal<NavItem[]>([
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Operations', icon: 'schema', route: '/operations' },
    { label: 'Customers', icon: 'groups', route: '/customers' },
    { label: 'Inventory', icon: 'inventory_2', route: '/inventory' },
    { label: 'Reports', icon: 'monitoring', route: '/reports' },
    { label: 'Settings', icon: 'tune', route: '/settings' },
  ]);

  readonly metrics = signal<MetricCard[]>([
    { label: 'Revenue Flow', value: '$2.48M', change: '+18.4%', trend: 'up', accent: '#35d7a1' },
    { label: 'Active Workflows', value: '148', change: '+12', trend: 'up', accent: '#65a7ff' },
    { label: 'SLA Attainment', value: '97.8%', change: '+2.1%', trend: 'up', accent: '#b895ff' },
    { label: 'Open Exceptions', value: '23', change: '-7', trend: 'down', accent: '#ffcf6d' },
  ]);

  readonly operations = signal<Operation[]>([
    {
      id: 'OP-1042',
      workflow: 'Enterprise onboarding',
      owner: 'Amina Hassan',
      status: 'Running',
      priority: 'Critical',
      completion: 84,
      eta: 'Today 16:30',
    },
    {
      id: 'OP-1039',
      workflow: 'Supply reconciliation',
      owner: 'Nora Patel',
      status: 'Review',
      priority: 'High',
      completion: 68,
      eta: 'Tomorrow 09:00',
    },
    {
      id: 'OP-1037',
      workflow: 'Contract approvals',
      owner: 'Liam Brooks',
      status: 'Delayed',
      priority: 'Medium',
      completion: 42,
      eta: 'Jun 4',
    },
    {
      id: 'OP-1031',
      workflow: 'Renewal automation',
      owner: 'Maya Chen',
      status: 'Complete',
      priority: 'Low',
      completion: 100,
      eta: 'Closed',
    },
  ]);

  readonly customers = signal<Customer[]>([
    {
      company: 'Northstar Capital',
      segment: 'Enterprise',
      health: 'Excellent',
      arr: '$420K',
      owner: 'Maya Chen',
      renewal: 'Aug 18',
    },
    {
      company: 'HelioGrid Energy',
      segment: 'Mid-market',
      health: 'Good',
      arr: '$185K',
      owner: 'Amina Hassan',
      renewal: 'Sep 02',
    },
    {
      company: 'Atlas Medical',
      segment: 'Enterprise',
      health: 'At Risk',
      arr: '$310K',
      owner: 'Liam Brooks',
      renewal: 'Jul 11',
    },
    {
      company: 'UrbanNest Retail',
      segment: 'Scale-up',
      health: 'Excellent',
      arr: '$96K',
      owner: 'Nora Patel',
      renewal: 'Oct 24',
    },
  ]);

  readonly inventory = signal<InventoryItem[]>([
    {
      sku: 'INV-8821',
      item: 'Edge gateway modules',
      location: 'Cairo DC',
      stock: 1420,
      reorderPoint: 700,
      status: 'Healthy',
    },
    {
      sku: 'INV-4410',
      item: 'Industrial scanners',
      location: 'Dubai Hub',
      stock: 248,
      reorderPoint: 300,
      status: 'Low',
    },
    {
      sku: 'INV-2753',
      item: 'Automation control units',
      location: 'Berlin 3PL',
      stock: 910,
      reorderPoint: 420,
      status: 'Healthy',
    },
    {
      sku: 'INV-1198',
      item: 'Smart shelf sensors',
      location: 'Austin DC',
      stock: 2330,
      reorderPoint: 850,
      status: 'Overstock',
    },
  ]);

  readonly reports = signal<ReportItem[]>([
    {
      title: 'Executive operating review',
      description: 'Cross-functional performance, risk, and capacity signals.',
      cadence: 'Weekly',
      owner: 'Strategy Ops',
      freshness: 'Updated 8 min ago',
    },
    {
      title: 'Customer health forecast',
      description: 'Renewal likelihood and expansion pipeline movement.',
      cadence: 'Daily',
      owner: 'Revenue Ops',
      freshness: 'Updated 24 min ago',
    },
    {
      title: 'Inventory exposure',
      description: 'Regional stock pressure, exceptions, and replenishment needs.',
      cadence: 'Hourly',
      owner: 'Supply Ops',
      freshness: 'Updated 3 min ago',
    },
  ]);

  readonly activities = signal<ActivityItem[]>([
    {
      title: 'Priority workflow routed',
      detail: 'Enterprise onboarding escalated to legal review.',
      timestamp: '11 min ago',
      status: 'Running',
    },
    {
      title: 'Forecast sync completed',
      detail: 'Revenue and inventory forecasts refreshed for Q3 planning.',
      timestamp: '24 min ago',
      status: 'Complete',
    },
    {
      title: 'Customer risk detected',
      detail: 'Atlas Medical engagement dropped below the success threshold.',
      timestamp: '42 min ago',
      status: 'Review',
    },
  ]);

  readonly activeOperations = computed(
    () => this.operations().filter((operation) => operation.status !== 'Complete').length,
  );

  readonly inventoryPressure = computed(
    () => this.inventory().filter((item) => item.status === 'Low').length,
  );
}
