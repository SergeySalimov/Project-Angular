import { Product } from "./product.model";

export interface ProductPlacer {
  name: string,
  urlName: string,
  hasChildren: boolean,
  parents?: string[],
  content: Product[]
}
