"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1687210937397 = void 0;
class default1687210937397 {
    constructor() {
        this.name = 'default1687210937397';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`pedidos\` (\`id_pedido\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`prioridade\` text ('0', '1', '2') NOT NULL, \`maquina\` text NULL, \`estado\` text ('pendente', 'aprovado', 'concluido', 'reprovado') NOT NULL, \`arquivo\` longblob NULL, \`medida\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorPedido\` int NULL, \`id_autorAutorizador\` int NULL, PRIMARY KEY (\`id_pedido\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`horaDisponivel\` (\`id_hora\` int NOT NULL AUTO_INCREMENT, \`dataInicio\` text NOT NULL, \`dataFim\` text NOT NULL, \`disponivel\` tinyint NOT NULL, PRIMARY KEY (\`id_hora\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`pedidosAnonimo\` (\`id_pedidoAnonimo\` int NOT NULL AUTO_INCREMENT, \`material\` text NULL, \`maquina\` text NULL, \`estado\` text ('0', '1', '2', '3') NOT NULL, \`arquivo\` longblob NULL, \`medida\` text NULL, \`codigo\` text NULL, \`id_horaDisponivel\` int NULL, \`id_autorAutorizadorAnonimo\` int NULL, PRIMARY KEY (\`id_pedidoAnonimo\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`usuarios\` ADD CONSTRAINT \`FK_d5bc49a24115cb362400988d1c8\` FOREIGN KEY (\`id_cargo\`) REFERENCES \`cargos\`(\`id_cargo\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_208826353b1be16c00ea5a9099a\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_2dff598b93ad16a3a689da63ccf\` FOREIGN KEY (\`id_autorPedido\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidos\` ADD CONSTRAINT \`FK_8ece1949054651a9c3bf0384783\` FOREIGN KEY (\`id_autorAutorizador\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_feaa58d9634e2758729f20154b6\` FOREIGN KEY (\`id_horaDisponivel\`) REFERENCES \`horaDisponivel\`(\`id_hora\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` ADD CONSTRAINT \`FK_32028fc5ea024bb0f60d97f481e\` FOREIGN KEY (\`id_autorAutorizadorAnonimo\`) REFERENCES \`usuarios\`(\`id_usuario\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_32028fc5ea024bb0f60d97f481e\``);
        await queryRunner.query(`ALTER TABLE \`pedidosAnonimo\` DROP FOREIGN KEY \`FK_feaa58d9634e2758729f20154b6\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_8ece1949054651a9c3bf0384783\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_2dff598b93ad16a3a689da63ccf\``);
        await queryRunner.query(`ALTER TABLE \`pedidos\` DROP FOREIGN KEY \`FK_208826353b1be16c00ea5a9099a\``);
        await queryRunner.query(`ALTER TABLE \`usuarios\` DROP FOREIGN KEY \`FK_d5bc49a24115cb362400988d1c8\``);
        await queryRunner.query(`DROP TABLE \`pedidosAnonimo\``);
        await queryRunner.query(`DROP TABLE \`horaDisponivel\``);
        await queryRunner.query(`DROP TABLE \`pedidos\``);
    }
}
exports.default1687210937397 = default1687210937397;
