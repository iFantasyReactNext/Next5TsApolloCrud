import BassSchema from '../schema/BassSchema';



export type BassResolverType = {
  Query: object,
  Mutation: object,
  Field: object
}

export default abstract class BassResolverSchema {
  private _Query: { [key: string]: any };
  private _Mutation: { [key: string]: any };
  private _Field: { [key: string]: any };
  constructor(props: BassResolverType) {
    this._Query = props.Query;
    this._Mutation = props.Mutation;
    this._Field = props.Field;
  }
  public get Query(): object {
    return this._Query;
  }
  public get Mutation(): object {
    return this._Mutation;
  }
  public get Field(): object {
    return this._Field;
  }
}