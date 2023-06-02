import { 
  Entity,
  Column,
  PrimaryColumn,
  OneToOne,
  JoinColumn
 } from "typeorm";

import { Endereco } from "./Endereco";

 @Entity()
 export class Cliente {
   @PrimaryColumn({ type: 'varchar' })
   id!:  string;

   @Column({
     type: "varchar",
     nullable: true
   })
   nome!: string;

   @Column({
    type: "varchar",
    nullable: true
  })
  sobreNome!: string;

  @OneToOne(() => Endereco)
  @JoinColumn()
  endereco!: Endereco;
 }
