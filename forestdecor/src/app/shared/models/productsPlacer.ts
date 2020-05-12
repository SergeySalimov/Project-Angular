import { Product } from './product.model';

export interface ProductPlacer {
  urlName: string;
  name: string;
  content: Product[];
  parents: string[];
}
