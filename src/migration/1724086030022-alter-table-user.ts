import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTableUser1724086030022 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        ALTER TABLE public.user ADD UNIQUE (email);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(``);
  }
}
