import { 
  Entity,
  Column,
  PrimaryGeneratedColumn
 } from "typeorm";

 @Entity()
 export class Endereco {
   @PrimaryGeneratedColumn({ type: 'int' })
   id?:  number;

   @Column({
     type: "varchar",
   })
   estado!: string;

   @Column({
    type: "varchar",
  })
  cidade!: string;

  @Column({
    type: "varchar",
  })
  bairro!: string;

  @Column({
    type: "varchar",
  })
  rua!: string;

  @Column({
    type: "int",
  })
  numero!: number;

  @Column({
    type: "varchar",
  })
  codigoPostal!: string;

  @Column({
    type: "varchar",
  })
  informacoesAdicionais!: string;
 }
