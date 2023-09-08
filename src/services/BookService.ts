import {GET_BOOKS} from './BookService.constant';
import {
  BookServiceRequestParams,
  BookServiceResponse,
} from './BookService.types';
import {HttpClient} from './HttpClient';

export class BookService {
  private static instance: BookService;
  private static api: HttpClient;
  private constructor() {}

  public static init() {
    if (!BookService.instance) {
      BookService.instance = new BookService();
      BookService.api = new HttpClient('https://chroniclingamerica.loc.gov');
    }
  }

  public static async getBooks() {
    const data = await BookService.api.get<
      BookServiceResponse,
      BookServiceRequestParams
    >(GET_BOOKS, {
      params: {
        terms: 'oakland',
        format: 'json',
        page: 5,
      },
    });

    return data.items;
  }
}

BookService.init();

// https://chroniclingamerica.loc.gov/search/titles/results/?terms=oakland&format=json&page=5

// title, publisher, subject
// search within title and subject
