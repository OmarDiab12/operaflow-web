export type TrendDirection = 'up' | 'down' | 'flat';

export interface NavItem {
  label: string;
  icon: string;
  route: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  trend: TrendDirection;
  accent: string;
}

export interface Operation {
  id: string;
  workflow: string;
  owner: string;
  status: 'Running' | 'Review' | 'Delayed' | 'Complete';
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  completion: number;
  eta: string;
}

export interface Customer {
  company: string;
  segment: string;
  health: 'Excellent' | 'Good' | 'At Risk';
  arr: string;
  owner: string;
  renewal: string;
}

export interface InventoryItem {
  sku: string;
  item: string;
  location: string;
  stock: number;
  reorderPoint: number;
  status: 'Healthy' | 'Low' | 'Overstock';
}

export interface ReportItem {
  title: string;
  description: string;
  cadence: string;
  owner: string;
  freshness: string;
}

export interface ActivityItem {
  title: string;
  detail: string;
  timestamp: string;
  status: string;
}
