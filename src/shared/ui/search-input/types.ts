import type { ChangeEvent } from 'react';

export interface ISearchInputProps {
  value: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
