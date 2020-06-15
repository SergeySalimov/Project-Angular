import { PhotoUrl } from './photo-url.model';

export interface OldProduct {
  name: string;
  urlName: string;
  description?: string;
  img?: string;
  photos?: PhotoUrl[];
  id?: string;
  children?: OldProduct[];
}
