import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    name: string
    @Column()
    description: string
}
