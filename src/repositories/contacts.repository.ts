import Contact from "../entities/Contact.entity";
import BaseRepository from "./baseRepository";

class ContactRepository extends BaseRepository<Contact> {
  constructor() {
    super(Contact);
  }

  async listByUserId(userId:string):Promise<Contact[]>{
    return await this.find({userId})
  }

  async getUserProfile(userId:string): Promise<Contact | null>{
    return await this.findOne({userId, is_user:true})
  }
}

export default ContactRepository;
