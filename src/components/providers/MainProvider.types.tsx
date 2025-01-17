import { ReactNode } from 'react';

export type MainContextType = string | null;
export type SetMainContextType = (value: string | null) => void;

export interface MainProviderType {
  children: ReactNode;
}
