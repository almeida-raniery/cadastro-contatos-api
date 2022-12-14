import { BaseEntity, DeepPartial, EntityTarget, FindOneOptions, FindOptionsWhere, Repository, UpdateResult } from "typeorm";
import AppDataSource from "../data-source";
import { IRequestData } from "../interfaces/baseInterfaces/requestData.interface";
import { IRequestOptions } from "../interfaces/baseInterfaces/requestOptions.interface";

class BaseRepository<Entity extends BaseEntity> {
  repo: Repository<Entity>;

  constructor(entityClass: EntityTarget<Entity>) {
    this.getRepo(entityClass);
  }

  getRepo(entityClass: EntityTarget<Entity>): Repository<Entity> {
    const newRepo = AppDataSource.getRepository(entityClass);

    this.repo = newRepo;

    return newRepo;
  }

  async create(data: DeepPartial<Entity>): Promise<Entity> {
    const entity = this.repo.create(data);

    await this.repo.save(entity);

    return entity;
  }

  async find(options: IRequestOptions): Promise<Entity[]> {
    const entity = await this.repo.find({where: options});

    return entity;
  }

  async listAll(): Promise<Entity[]> {
    return await this.repo.find()
  }

  async findOne(options: IRequestOptions): Promise<Entity | null> {
    const entity = await this.repo.findOne({where:options});

    return entity;
  }

  async update(
    options: FindOptionsWhere<Entity>,
    data: IRequestData
  ): Promise<UpdateResult> {
    const result = await this.repo.update(options, data);

    return result;
  }

  async delete(options: FindOptionsWhere<Entity>): Promise<void> {
    await this.repo.delete(options);
  }
}

export default BaseRepository;
