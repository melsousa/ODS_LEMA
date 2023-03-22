"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1679515093982 = void 0;
class default1679515093982 {
    constructor() {
        this.name = 'default1679515093982';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`HoraDisponivel\` (\`id_hora\` int NOT NULL AUTO_INCREMENT, \`dataInicio\` text NOT NULL, \`dataFim\` text NOT NULL, \`Disponivel\` tinyint NOT NULL, PRIMARY KEY (\`id_hora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidos\` (\`id_pedido\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`prioridade\` text NOT NULL, \`maquina\` text NULL, \`estado\` text NULL, \`arquivo\` text NULL, \`medida\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorPedido\` int NULL, \`id_autorAutorizador\` int NULL, PRIMARY KEY (\`id_pedido\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cargos\` (\`id_cargo\` int NOT NULL AUTO_INCREMENT, \`cargo\` text NOT NULL, PRIMARY KEY (\`id_cargo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidosAnonimo\` (\`id_pedidoAnonimo\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`maquina\` text NULL, \`estado\` text NULL, \`arquivo\` text NULL, \`medida\` text NULL, \`codigo\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorAutorizadorAnonimo\` int NULL, PRIMARY KEY (\`id_pedidoAnonimo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`User\`.\`usuario\` (\`id_usuario\` int NOT NULL AUTO_INCREMENT, \`nome\` text NOT NULL, \`email\` text NOT NULL, \`senha\` text NOT NULL, \`id_cargo\` int NULL, UNIQUE INDEX \`IDX_047829ff1718a09afccd1c2fb7\` (\`senha\`), PRIMARY KEY (\`id_usuario\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`HoraDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_2dff598b93ad16a3a689da63ccf\` FOREIGN KEY (\`id_autorPedido\`) REFERENCES \`User\`.\`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_8ece1949054651a9c3bf0384783\` FOREIGN KEY (\`id_autorAutorizador\`) REFERENCES \`User\`.\`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_feaa58d9634e2758729f20154b6\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`HoraDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_32028fc5ea024bb0f60d97f481e\` FOREIGN KEY (\`id_autorAutorizadorAnonimo\`) REFERENCES \`User\`.\`usuario\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\`.\`usuario\` ADD CONSTRAINT \`FK_94da063571d012832ad913852b3\` FOREIGN KEY (\`id_cargo\`) REFERENCES \`cargos\`(\`id_cargo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`User\`.\`usuario\` DROP FOREIGN KEY \`FK_94da063571d012832ad913852b3\``);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_32028fc5ea024bb0f60d97f481e\``);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_feaa58d9634e2758729f20154b6\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_8ece1949054651a9c3bf0384783\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_2dff598b93ad16a3a689da63ccf\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`DROP INDEX \`IDX_047829ff1718a09afccd1c2fb7\` ON \`User\`.\`usuario\``);
        await queryRunner.query(`DROP TABLE \`User\`.\`usuario\``);
        await queryRunner.query(`DROP TABLE \`pedidosAnonimo\``);
        await queryRunner.query(`DROP TABLE \`cargos\``);
        await queryRunner.query(`DROP TABLE \`pedidos\``);
        await queryRunner.query(`DROP TABLE \`HoraDisponivel\``);
    }
}
exports.default1679515093982 = default1679515093982;
