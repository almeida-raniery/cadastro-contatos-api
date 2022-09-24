import { DeepPartial } from "typeorm";
import Contact from "../entities/Contact.entity";
import { AppError } from "../errors/AppError";
import BaseRepository from "./baseRepository";
import UserRepository from "./user.repository";

class ContactRepository extends BaseRepository<Contact> {
  constructor() {
    super(Contact);
  }

  async createAndAssign(
    data: DeepPartial<Contact>,
    ownerId: string
  ): Promise<Contact> {
    const userRepo = new UserRepository();
    const contact = this.repo.create(data);
    const owner = await userRepo.findOne({ id: ownerId });

    contact.user = owner!;

    const createdContact = this.repo.save(contact);

    return createdContact;
  }

  async listByUserId(userId: string): Promise<Contact[]> {
    return await this.find({ user: {id: userId} });
  }

  async getUserProfile(userId: string): Promise<Contact | null> {
    return await this.findOne({ userId, is_user: true });
  }

  async getOwnerId(contactId: string): Promise<string> {
    const contact = await this.repo
      .createQueryBuilder("contact")
      .select("contact.userId", "userId")
      .where("contact.id = :id", {id: contactId})
      .getRawOne()

    return contact!.userId;
  }
}

export default ContactRepository;
