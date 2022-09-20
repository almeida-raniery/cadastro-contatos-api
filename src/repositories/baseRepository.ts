import { BaseEntity, EntityTarget, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";

class BaseRepository {
  repo: Repository<BaseEntity>;

  constructor(entityClass: EntityTarget<BaseEntity>) {
    this.updateRepo(entityClass);
  }

  updateRepo(entityClass: EntityTarget<BaseEntity>): Repository<BaseEntity> {
    const newRepo = AppDataSource.getRepository(entityClass);

    this.repo = newRepo;

    return newRepo;
  }

  async create(data: IRequestData): Promise<BaseEntity> {
    const entity = this.repo.create(data);

    await this.repo.save(entity);

    return entity;
  }

  async find(options: IRequestOptions): Promise<BaseEntity[]> {
    const entity = await this.repo.find(options);

    return entity;
  }

  async findOne(options: IRequestOptions): Promise<BaseEntity | null> {
    const entity = await this.repo.findOne(options);

    return entity;
  }

  async update(options: IRequestOptions, data: IRequestData): Promise<UpdateResult> {
    const result = await this.repo.update(options, data);

    return result;
  }

  async delete(options: IRequestOptions): Promise<void> {
    await this.repo.delete(options)
  }
}

export default BaseRepository