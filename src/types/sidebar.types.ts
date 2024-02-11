import { ReactNode } from 'react';

export type TRoute = {
  path?: string;
  element?: ReactNode;
  children?: TRoute[];
};

export type TMenuItem = {
  name: string;
  path?: string;
  icon?: ReactNode;
  children?: TMenuItem[];
};

export type TCustomMenuItem = {
  key: string;
  icon?: ReactNode;
  label: ReactNode;
  children?: TCustomMenuItem[];
};
