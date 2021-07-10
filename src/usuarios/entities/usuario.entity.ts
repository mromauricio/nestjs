import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column('varchar', {unique: true})
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;
}
