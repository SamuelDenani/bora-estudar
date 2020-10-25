import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export default class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @Column()
    password: string;
};