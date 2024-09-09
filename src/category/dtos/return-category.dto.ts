import { CategoryEntity } from '../entities/category.entity';

export class ReturnCategoryDto {
  id: number;
  nome: string;

  constructor(categoryEntity: CategoryEntity) {
    this.id = categoryEntity.id;
    this.nome = categoryEntity.name;
  }
}
