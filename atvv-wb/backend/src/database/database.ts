import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: "postgres", // Tipo do Banco usado
    host: "localhost", // Host do Banco
    port: 5432, // Porta do Banco
    username: "postgres", // Usuário do Banco
    password: "Mari012310", // Senha do Banco
    database: "wb2", // Nome do Banco
    synchronize: true, // Sincronizar o Banco
    logging: false, // Logar no Banco
    entities: ["src/models/*.ts"], // Entidades do Banco
    subscribers: [], // Subscribers do Banco
    migrations: [], // Migrations do Banco
})