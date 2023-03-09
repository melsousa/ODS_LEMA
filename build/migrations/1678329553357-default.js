"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1678329553357 = void 0;
class default1678329553357 {
    name = 'default1678329553357';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` int NOT NULL AUTO_INCREMENT, \`orderUsername\` text NOT NULL, \`startDate\` text NULL, \`endDate\` text NULL, \`printer\` text NULL, \`state\` text NOT NULL, \`id_user\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\`.\`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` text NOT NULL, \`email\` text NOT NULL, \`password\` text NOT NULL, UNIQUE INDEX \`IDX_638bac731294171648258260ff\` (\`password\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_cd5ab3545a6a927f97dd839dd96\` FOREIGN KEY (\`id_user\`) REFERENCES \`User\`.\`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_cd5ab3545a6a927f97dd839dd96\``);
        await queryRunner.query(`DROP INDEX \`IDX_638bac731294171648258260ff\` ON \`User\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`User\`.\`user\``);
        await queryRunner.query(`DROP TABLE \`orders\``);
    }
}
exports.default1678329553357 = default1678329553357;
