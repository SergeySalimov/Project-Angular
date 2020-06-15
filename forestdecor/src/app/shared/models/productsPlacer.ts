import { OldProduct } from './product.model';

export interface ProductPlacer {
  urlName: string;
  name: string;
  content: OldProduct[];
  parents: string[];
}
