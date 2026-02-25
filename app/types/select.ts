export type SelectValue = string | number;

export interface SelectOption<T extends SelectValue = SelectValue> {
  label: string;
  value: T;
  disabled?: boolean;
  [key: string]: unknown;
}
