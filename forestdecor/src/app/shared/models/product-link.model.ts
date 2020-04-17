import { Product } from "./product.model";

export interface ProductLink {
  id: string,
  name: string,
  transName: string,
  subItems: boolean,
  content: Array<Product | ProductLink>
}
