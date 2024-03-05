export type TOrderBy = 'asc' | 'desc';

export type TSortType = 'price' | 'date' | 'name';

export interface ISortItem {
  order: TOrderBy;
  type: TSortType;
  name: string;
}