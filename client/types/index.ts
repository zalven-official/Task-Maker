import type { RouteParamsRaw } from 'vue-router'


export * from './notification.type'
export * from './user.type'
export * from './task.type'
export * from './table.type'
export * from './profile.type'


export interface Notification {
  id: number;
  date: Date;
  route: string;
  message: string;
}

export interface Breadcrumbs {
  path: String,
  text: String
  params?: RouteParamsRaw,
}

export interface MenuItem {
  label: string;
  icon?: string;
  tip?: string | null;
  link?: string,
};