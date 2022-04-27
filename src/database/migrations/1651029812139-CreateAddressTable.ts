import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateAddressTable1651029812139 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(new Table({
            name: 'address',
            columns:[
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    generationStrategy:"uuid",
                    default:"uuid_generate_v4()",
                },
                {
                    name: "pais",
                    type: "varchar"
                },
                {
                    name: "rua",
                    type: "varchar"
                },
                {
                    name: "municipio",
                    type: "varchar"
                },
                {
                    name: "bairro",
                    type: "varchar"
                },
                {
                    name: "userId",
                    type: "uuid",
                }
            ]
        }))

        await queryRunner.createForeignKey(
            'address',
            new TableForeignKey({
                columnNames:['userId'],
                referencedTableName: 'users',
                referencedColumnNames:['id'],
                onDelete:'CASCADE'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address')
        await queryRunner.dropTable('DROP EXTENSION "uuid-ossp"')
    }

}
