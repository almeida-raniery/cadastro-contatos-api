import { BaseEntity, Repository } from "typeorm";
import User from "../entities/User.entity";
import BaseRepository from "./baseRepository";

class UserRepository extends BaseRepository {
    constructor(){
        super(User)
    }

    updateRepo(): Repository<BaseEntity> {
        return super.updateRepo(User)
    }
}

export default UserRepository