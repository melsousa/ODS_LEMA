"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Default1683310110959 = void 0;
class Default1683310110959 {
    constructor() {
        this.name = 'Default1683310110959';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "cargos" ("id_cargo" SERIAL NOT NULL, "cargo" text NOT NULL, CONSTRAINT "PK_b1e2aa0613a426c809dff43a75a" PRIMARY KEY ("id_cargo"))`);
        await queryRunner.query(`CREATE TABLE "usuarios" ("id_usuario" SERIAL NOT NULL, "nome" text NOT NULL, "email" text NOT NULL, "senha" text NOT NULL, "id_cargo" integer, CONSTRAINT "PK_dfe59db369749f9042499fd8107" PRIMARY KEY ("id_usuario"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id_pedido" SERIAL NOT NULL, "material" text, "prioridade" text NOT NULL, "maquina" text, "estado" text, "arquivo" text, "medida" text, "id_horaDisponivel" integer, "id_autorPedido" integer, "id_autorAutorizador" integer, CONSTRAINT "PK_9a67e2a4917b3656d2d23fe8b5e" PRIMARY KEY ("id_pedido"))`);
        await queryRunner.query(`CREATE TABLE "horaDisponivel" ("id_hora" SERIAL NOT NULL, "dataInicio" text NOT NULL, "dataFim" text NOT NULL, "disponivel" boolean NOT NULL, CONSTRAINT "PK_e2b2153f36b07980e4706ab775f" PRIMARY KEY ("id_hora"))`);
        await queryRunner.query(`CREATE TABLE "pedidosAnonimo" ("id_pedidoAnonimo" SERIAL NOT NULL, "material" text, "maquina" text, "estado" text, "arquivo" text, "medida" text, "codigo" text, "id_horaDisponivel" integer, "id_autorAutorizadorAnonimo" integer, CONSTRAINT "PK_31930a3b55703417d4b5fb988e6" PRIMARY KEY ("id_pedidoAnonimo"))`);
        await queryRunner.query(`ALTER TABLE "usuarios" ADD CONSTRAINT "FK_d5bc49a24115cb362400988d1c8" FOREIGN KEY ("id_cargo") REFERENCES "cargos"("id_cargo") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_208826353b1be16c00ea5a9099a" FOREIGN KEY ("id_horaDisponivel") REFERENCES "horaDisponivel"("id_hora") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_2dff598b93ad16a3a689da63ccf" FOREIGN KEY ("id_autorPedido") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_8ece1949054651a9c3bf0384783" FOREIGN KEY ("id_autorAutorizador") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" ADD CONSTRAINT "FK_feaa58d9634e2758729f20154b6" FOREIGN KEY ("id_horaDisponivel") REFERENCES "horaDisponivel"("id_hora") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" ADD CONSTRAINT "FK_32028fc5ea024bb0f60d97f481e" FOREIGN KEY ("id_autorAutorizadorAnonimo") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" DROP CONSTRAINT "FK_32028fc5ea024bb0f60d97f481e"`);
        await queryRunner.query(`ALTER TABLE "pedidosAnonimo" DROP CONSTRAINT "FK_feaa58d9634e2758729f20154b6"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_8ece1949054651a9c3bf0384783"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_2dff598b93ad16a3a689da63ccf"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_208826353b1be16c00ea5a9099a"`);
        await queryRunner.query(`ALTER TABLE "usuarios" DROP CONSTRAINT "FK_d5bc49a24115cb362400988d1c8"`);
        await queryRunner.query(`DROP TABLE "pedidosAnonimo"`);
        await queryRunner.query(`DROP TABLE "horaDisponivel"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "usuarios"`);
        await queryRunner.query(`DROP TABLE "cargos"`);
    }
}
exports.Default1683310110959 = Default1683310110959;
