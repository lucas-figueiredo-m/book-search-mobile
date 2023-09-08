export type BookServiceRequestParams = {
  terms: string;
  format: string;
  page: number;
};

export type BookServiceResponse = {
  totalItems: number;
  endIndex: number;
  startIndex: number;
  itemsPerPage: number;
  items: BookItem[];
};

export type BookItem = {
  essay: [];
  place_of_publication: string;
  start_year: number;
  publisher: string;
  county: string[];
  edition: null;
  frequency: string | null;
  url: string;
  id: string;
  subject: string[];
  city: string[];
  language: string[];
  title: string;
  holding_type: string[];
  end_year: number;
  alt_title: [];
  note: string[];
  lccn: string;
  state: string[];
  place: string[];
  country: string;
  type: string;
  title_normal: string;
  oclc: string;
};
