import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1650926501274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable( new Table({
            name: "users",
            columns: [
                {
                name: "id",
                type: "uuid",
                isPrimary: true,
                generationStrategy:"uuid",
                default:"uuid_generate_v4()",
            },
            {
                name:"email",
                type:"varchar",
                isUnique: true
            },
            {
                name:"nome",
                type:"varchar",
            },
            {
                name:"sobrenome",
                type:"varchar",
            },
            {
                name:"password",
                type:"varchar"
            },
            {
                name: "created_at",
                type: "timestamp",
                default: "now()",
            },
            {
                name: "updated_at",
                type: "timestamp",
                default: "now()",
            }]
        }) )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
        await queryRunner.dropTable('DROP EXTENSION "uuid-ossp"')
    }

}
