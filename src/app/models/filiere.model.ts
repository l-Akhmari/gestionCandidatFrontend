export class filiere{
  private _idFiliere! : number;
  private _intitule! : string;


  constructor() {}

  get idFiliere(): number {
    return this._idFiliere;
  }

  set idFiliere(value: number) {
    this._idFiliere = value;
  }

  get intitule(): string {
    return this._intitule;
  }

  set intitule(value: string) {
    this._intitule = value;
  }
}
