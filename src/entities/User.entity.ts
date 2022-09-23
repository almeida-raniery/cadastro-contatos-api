import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import Contact from "./Contact.entity";

@Entity()
export default class User extends BaseEntity{
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;
  @Column()
  password: string;
  @Column({ length: 32, unique: true })
  username: string;
  @Column({ length: 100, unique: true })
  email: string;
  @CreateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
  })
  created_at: Date;
  @UpdateDateColumn({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP(6)",
    onUpdate: "CURRENT_TIMESTAMP(6)",
  })
  updated_at: Date;
  @OneToMany(() => Contact, contact => contact.user, {eager:true})
  contacts: Contact[];
}
