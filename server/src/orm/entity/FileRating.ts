import {Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn} from "typeorm"
import {CourseFile} from "./CourseFile";

@Entity()
export class FileRating {

    @PrimaryColumn()
    request_key!: string;

    @Column({default: null})
    client_details!: string;

    @Column()
    is_positive!: boolean;

    @ManyToOne(() => CourseFile, file => file.ratings)
    file!: CourseFile

    @CreateDateColumn()
    created_at!: Date;

}
