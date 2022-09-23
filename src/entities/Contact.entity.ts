import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import User from "./User.entity";

@Entity()
export default class Contact extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;
  @Column({ nullable: true, length: 20 })
  nickname: string;
  @Column({ length: 50 })
  firstName: string;
  @Column({ length: 137 })
  lastName: string;
  @Column({ length: 100 })
  email: string;
  @Column({ length: 9 })
  phoneNumber: string;
  @Column({ default: false })
  is_user: boolean;
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
  public updated_at: Date;

  @ManyToOne(()=> User, user => user.contacts)
  user: User;
}
