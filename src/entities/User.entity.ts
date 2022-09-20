import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import Contact from "./Contact.entity";

@Entity()
export default class User {
  @PrimaryColumn("uuid")
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
  @OneToMany(() => Contact, contact => contact.user, {eager:true})
  contacts: Contact;

  public updated_at: Date;
}
