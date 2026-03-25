import type { ISearchInputProps } from './types';

export function SearchInput({ value, onInputChange }: ISearchInputProps) {
  return (
    <div>
      <input type="text" value={value} onChange={onInputChange} />
    </div>
  );
}
