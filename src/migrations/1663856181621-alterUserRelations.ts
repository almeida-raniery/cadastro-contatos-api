import { MigrationInterface, QueryRunner } from "typeorm";

export class alterUserRelations1663856181621 implements MigrationInterface {
    name = 'alterUserRelations1663856181621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "contacts" TO "updated_at"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "updated_at" TO "contacts"`);
    }

}
