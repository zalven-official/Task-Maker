import type { RouteParamsRaw } from 'vue-router'


export * from './notification.type'
export * from './user.type'
export * from './task.type'
export * from './table.type'



export interface Breadcrumbs {
  path: String,
  text: String
  params?: RouteParamsRaw,
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

export enum CivilStatus {
  Single = "Single",
  Married = "Married",
  Divorced = "Divorced",
  Widowed = "Widowed",
  Other = "Other",
}

export interface MenuItem {
  label: string;
  icon?: string;
  tip?: string | null;
  link?: string,
};