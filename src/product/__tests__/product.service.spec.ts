import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { ProductService } from '../product.service';
import { ProductEntity } from '../entities/product.entity';
import { productMock } from '../__mocks__/product.mock';
import { createProductMock } from '../__mocks__/create-product.mock';
import { CategoryService } from '../../category/category.service';
import { categoryMock } from '../../category/__mocks__/category.mock';

describe('ProductService', () => {
  let service: ProductService;
  let productRepository: Repository<ProductEntity>;
  let categoryService: CategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService,
        {
          provide: getRepositoryToken(ProductEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([productMock]),
            save: jest.fn().mockResolvedValue(productMock),
          },
        },
        {
          provide: CategoryService,
          useValue: {
            findCategoryById: jest.fn().mockResolvedValue(categoryMock),
          },
        },
      ],
    }).compile();

    service = module.get<ProductService>(ProductService);
    productRepository = module.get<Repository<ProductEntity>>(
      getRepositoryToken(ProductEntity),
    );
    categoryService = module.get<CategoryService>(CategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(productRepository).toBeDefined();
    expect(categoryService).toBeDefined();
  });

  describe('findAll Products', () => {
    it('should return all products', async () => {
      const products = await service.findAllProducts();

      expect(products).toEqual([productMock]);
    });

    it('should return error if products empty', async () => {
      jest.spyOn(productRepository, 'find').mockResolvedValue([]);

      await expect(service.findAllProducts()).rejects.toThrowError();
    });

    it('should return error in exception', async () => {
      jest.spyOn(productRepository, 'find').mockRejectedValue(new Error());

      await expect(service.findAllProducts()).rejects.toThrowError();
    });
  });

  describe('create Product', () => {
    it('should create a product and return', async () => {
      const product = await service.createProduct(createProductMock);

      expect(product).toEqual(productMock);
    });

    it('should return error in exception', async () => {
      jest.spyOn(productRepository, 'save').mockRejectedValue(new Error());

      await expect(service.createProduct(productMock)).rejects.toThrowError();
    });

    it('should return error if category not found', async () => {
      jest
        .spyOn(categoryService, 'findCategoryById')
        .mockRejectedValue(new Error());

      expect(service.createProduct(createProductMock)).rejects.toThrowError();
    });
  });
});
