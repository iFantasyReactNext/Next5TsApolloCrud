
export type BassSchemaProps = {
  typeDefs: string;
  queries: string;
  mutations: string;
}

export default abstract class BassSchema {
  private _Querys: any;
  private _Mutation: any;
  private _TypeDefs: any;

  constructor(props: BassSchemaProps) {
    this._Querys = props.queries;
    this._Mutation = props.mutations;
    this._TypeDefs = props.typeDefs;
  }
  public get getQuerys(): string {
    return this._Querys;
  }
  public get getMutations(): string {
    return this._Mutation;
  }
  public get getTypeDefs(): string {
    return this._TypeDefs;
  }

}

