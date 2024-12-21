import { FilterQuery, Query } from "mongoose";

class QueryBuilder<T> {
    public queryModel: Query<T[], T>;
    public query: Record<string, unknown>;
  
    constructor(queryModel: Query<T[], T>, query: Record<string, unknown>) {
      this.queryModel = queryModel;
      this.query = query;
    }
  
    search(searchableFrelds: string[]) {
      const searchTerm = this?.query?.searchTerm;
  
      if (searchTerm) {
        this.queryModel = this.queryModel.find({
          $or: searchableFrelds.map(
            (field) =>
              ({
                [field]: { $regex: searchTerm, $options: 'i' },
              }) as FilterQuery<T>,
          ),
        });
      }
      return this;
    }
  
    filter() {
      const queryObj = { ...this.query };
      const excludeFields = ['searchTerm', 'sort', 'limit' , 'fields'];
      excludeFields.forEach((el) => delete queryObj[el]);
  
      this.queryModel = this.queryModel.find(queryObj as FilterQuery<T>);
  
      return this;
    }
  
    sort() {
      const sort =
        (this?.query?.sort as string)?.split(',')?.join(' ') || '-createdAt';
      this.queryModel = this.queryModel.sort(sort as string);
  
      return this;
    }
  
  
    fields(){
      const fields =
        (this?.query?.fields as string)?.split(',')?.join(' ') || '-createdAt';
      this.queryModel = this.queryModel.select(fields as string);
  
      return this;
    }
  }
  
  export default QueryBuilder;
  