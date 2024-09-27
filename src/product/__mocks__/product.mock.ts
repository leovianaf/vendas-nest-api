import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  categoryId: categoryMock.id,
  id: 1,
  image: 'http://image.com',
  name: 'Product Test',
  price: 87.08,
  createdAt: new Date(),
  updatedAt: new Date(),
};
