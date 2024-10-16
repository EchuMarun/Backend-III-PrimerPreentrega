export class GenericRepository {
  constructor(repository) {
    this.repository = repository;
  }
  create = async data => {
    try {
      return await this.repository.create(data);
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getAll = async () => {
    try {
      return await this.repository.find();
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
  getByParam = async params => {
    try {
      return await this.repository.findOne(params);
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
  update = async (uid, updates) => {
    try {
      return await this.repository.findByIdAndUpdate(uid, updates, {
        new: true,
      });
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
  delete = async uid => {
    try {
      await this.repository.findOneAndDelete(uid);
      return 'pet has been deleted';
    } catch (error) {
      console.error(`repository error:${error}`);
      throw new Error('internal server Error');
    }
  };
}
