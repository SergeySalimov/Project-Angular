import { PhotoUrl } from './photo-url.model';

export interface Product {
  name: string;
  urlName: string;
  description?: string;
  img?: string;
  photos?: PhotoUrl[];
  id?: string;
  children?: Product[];
}
