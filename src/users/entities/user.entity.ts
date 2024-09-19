import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number;
  
    @Column()
    @ApiProperty()
    name: string;
  
    @Column()
    @ApiProperty()
    email: string;
  

}
