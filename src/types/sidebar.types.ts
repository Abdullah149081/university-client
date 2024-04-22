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

// export type TRoute = {
//   path: string;
//   element: ReactNode;
// };

export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;

export type TUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserPath[];
};
