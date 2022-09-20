import { BaseEntity, Repository } from "typeorm";
import Contact from "../entities/Contact.entity";
import BaseRepository from "./baseRepository";

class ContactRepository extends BaseRepository {
    constructor(){
        super(Contact)
    }

    updateRepo(): Repository<BaseEntity> {
        return super.updateRepo(Contact)
    }
}

export default ContactRepository