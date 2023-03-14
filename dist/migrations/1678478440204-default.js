"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1678478440204 = void 0;
class default1678478440204 {
    constructor() {
        this.name = 'default1678478440204';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`HoraDisponivel\` (\`id_hora\` int NOT NULL AUTO_INCREMENT, \`dataInicio\` text NOT NULL, \`dataFim\` text NOT NULL, \`Disponivel\` tinyint NOT NULL, PRIMARY KEY (\`id_hora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Orders\` (\`id_pedido\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`prioridade\` text NOT NULL, \`maquina\` text NULL, \`estado\` text NULL, \`arquivo\` text NULL, \`medida\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorPedido\` int NULL, \`id_autorAutorizador\` int NULL, PRIMARY KEY (\`id_pedido\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cargos\` (\`id_cargo\` int NOT NULL AUTO_INCREMENT, \`cargo\` text NOT NULL, PRIMARY KEY (\`id_cargo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\`.\`usuario\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`senha\` text NOT NULL, \`id_cargo\` int NULL, UNIQUE INDEX \`IDX_047829ff1718a09afccd1c2fb7\` (\`senha\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Orders\` ADD CONSTRAINT \`FK_1c82afa396fc91cf2778a13b99f\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`HoraDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Orders\` ADD CONSTRAINT \`FK_f588492626a0d9939d8200419c5\` FOREIGN KEY (\`id_autorPedido\`) REFERENCES \`User\`.\`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Orders\` ADD CONSTRAINT \`FK_bb556e1463d709fec6ec7e8ca62\` FOREIGN KEY (\`id_autorAutorizador\`) REFERENCES \`User\`.\`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\`.\`usuario\` ADD CONSTRAINT \`FK_94da063571d012832ad913852b3\` FOREIGN KEY (\`id_cargo\`) REFERENCES \`cargos\`(\`id_cargo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`User\`.\`usuario\` DROP FOREIGN KEY \`FK_94da063571d012832ad913852b3\``);
        await queryRunner.query(`ALTER TABLE \`Orders\` DROP FOREIGN KEY \`FK_bb556e1463d709fec6ec7e8ca62\``);
        await queryRunner.query(`ALTER TABLE \`Orders\` DROP FOREIGN KEY \`FK_f588492626a0d9939d8200419c5\``);
        await queryRunner.query(`ALTER TABLE \`Orders\` DROP FOREIGN KEY \`FK_1c82afa396fc91cf2778a13b99f\``);
        await queryRunner.query(`DROP INDEX \`IDX_047829ff1718a09afccd1c2fb7\` ON \`User\`.\`usuario\``);
        await queryRunner.query(`DROP TABLE \`User\`.\`usuario\``);
        await queryRunner.query(`DROP TABLE \`cargos\``);
        await queryRunner.query(`DROP TABLE \`Orders\``);
        await queryRunner.query(`DROP TABLE \`HoraDisponivel\``);
    }
}
exports.default1678478440204 = default1678478440204;
