export interface Telefone {
  id?: number;
  tipo?: string;
  numero: string;
}

export interface Contato {
  id?: number;
  primeiroNome: string;
  ultimoNome: string;
  email: string;
  telefones: Telefone[];
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort2 {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface RootObject {
  content: Contato[];
  pageable: Pageable;
  totalElements: number;
  last: boolean;
  totalPages: number;
  first: boolean;
  sort: Sort2;
  numberOfElements: number;
  size: number;
  number: number;
  empty: boolean;
}
