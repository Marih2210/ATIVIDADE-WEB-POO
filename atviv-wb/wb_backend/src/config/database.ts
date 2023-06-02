import "reflect-metadata";
import { DataSource } from "typeorm";

console.log('configs ', {
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Mari012310",
  database: "wb",
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Mari012310",
  database: "wb",
  synchronize: true,
  logging: false,
  entities: [
    "src/models/*.ts"
  ],
  migrations: [],
  subscribers: [],
});
