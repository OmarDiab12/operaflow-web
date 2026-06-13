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
    { label: 'Home', icon: 'space_dashboard', route: '/dashboard' },
    { label: 'Work', icon: 'task_alt', route: '/operations' },
    { label: 'Customers', icon: 'groups', route: '/customers' },
    { label: 'Stock', icon: 'inventory_2', route: '/inventory' },
    { label: 'Reports', icon: 'monitoring', route: '/reports' },
    { label: 'Settings', icon: 'tune', route: '/settings' },
  ]);

  readonly metrics = signal<MetricCard[]>([
    { label: 'Monthly Sales', value: '$248K', change: '+18.4%', trend: 'up', accent: '#35d7a1' },
    { label: 'Open Jobs', value: '148', change: '+12', trend: 'up', accent: '#65a7ff' },
    { label: 'On-time Orders', value: '97.8%', change: '+2.1%', trend: 'up', accent: '#b895ff' },
    { label: 'Needs Attention', value: '23', change: '-7', trend: 'down', accent: '#ffcf6d' },
  ]);

  readonly operations = signal<Operation[]>([
    {
      id: 'OP-1042',
      workflow: 'New client setup',
      owner: 'Amina Hassan',
      status: 'Running',
      priority: 'Urgent',
      completion: 84,
      eta: 'Today 16:30',
    },
    {
      id: 'OP-1039',
      workflow: 'Stock count review',
      owner: 'Nora Patel',
      status: 'Review',
      priority: 'High',
      completion: 68,
      eta: 'Tomorrow 09:00',
    },
    {
      id: 'OP-1037',
      workflow: 'Quote approvals',
      owner: 'Liam Brooks',
      status: 'Delayed',
      priority: 'Medium',
      completion: 42,
      eta: 'Jun 4',
    },
    {
      id: 'OP-1031',
      workflow: 'Repeat order follow-up',
      owner: 'Maya Chen',
      status: 'Complete',
      priority: 'Low',
      completion: 100,
      eta: 'Closed',
    },
  ]);

  readonly customers = signal<Customer[]>([
    {
      company: 'Northstar Cafe Group',
      segment: 'Retail',
      health: 'Excellent',
      arr: '$42K/mo',
      owner: 'Maya Chen',
      renewal: 'Aug 18',
    },
    {
      company: 'HelioGrid Installers',
      segment: 'Services',
      health: 'Good',
      arr: '$18K/mo',
      owner: 'Amina Hassan',
      renewal: 'Sep 02',
    },
    {
      company: 'Atlas Dental',
      segment: 'Healthcare',
      health: 'At Risk',
      arr: '$31K/mo',
      owner: 'Liam Brooks',
      renewal: 'Jul 11',
    },
    {
      company: 'UrbanNest Retail',
      segment: 'Retail',
      health: 'Excellent',
      arr: '$9.6K/mo',
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
      title: 'Weekly business snapshot',
      description: 'Sales, work in progress, and customer follow-ups in one view.',
      cadence: 'Weekly',
      owner: 'Owner',
      freshness: 'Updated 8 min ago',
    },
    {
      title: 'Customer check-ins',
      description: 'Accounts that need a call, renewal note, or quick save.',
      cadence: 'Daily',
      owner: 'Sales',
      freshness: 'Updated 24 min ago',
    },
    {
      title: 'Stock watchlist',
      description: 'Low-stock items, overstock, and upcoming reorder needs.',
      cadence: 'Hourly',
      owner: 'Inventory',
      freshness: 'Updated 3 min ago',
    },
  ]);

  readonly activities = signal<ActivityItem[]>([
    {
      title: 'Setup task moved forward',
      detail: 'New client setup is ready for final quote approval.',
      timestamp: '11 min ago',
      status: 'Running',
    },
    {
      title: 'Sales and stock refreshed',
      detail: "This month's sales and inventory numbers are up to date.",
      timestamp: '24 min ago',
      status: 'Complete',
    },
    {
      title: 'Customer needs a follow-up',
      detail: 'Atlas Dental has not replied to the latest renewal note.',
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
