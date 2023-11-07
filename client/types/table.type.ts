export interface TableColumn {
  name: string;
  value: string;
  formatCell?: ((value: any) => string);
}

export interface TableAction {
  name: string;
  value: string;
  icon: string;
  color: string;
  action: (item: any) => void;
}
