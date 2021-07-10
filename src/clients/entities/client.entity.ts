import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  razao_social: string;

  @Column()
  nome_fatasia: string;

  @Column('varchar', {unique: true})
  email: string;

  @Column()
  phone: string;

  @Column()
  address: string;
}