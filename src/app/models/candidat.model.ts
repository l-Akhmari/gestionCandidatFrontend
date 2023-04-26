import {filiere} from "./filiere.model";

export class candidat{
  private _username!: string;
  private _Prenom!: string;
  private _nom!:string;
  private _CNI!:string;
  private _CNE!:string;
  private _Email!: string;
  private _Telephone!:string;
  private _Adresse!:string;
 // private _Filieres : filiere = [];

  constructor() {}


  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get Prenom(): string {
    return this._Prenom;
  }

  set Prenom(value: string) {
    this._Prenom = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get CNI(): string {
    return this._CNI;
  }

  set CNI(value: string) {
    this._CNI = value;
  }

  get CNE(): string {
    return this._CNE;
  }

  set CNE(value: string) {
    this._CNE = value;
  }

  get Email(): string {
    return this._Email;
  }

  set Email(value: string) {
    this._Email = value;
  }

  get Telephone(): string {
    return this._Telephone;
  }

  set Telephone(value: string) {
    this._Telephone = value;
  }

  get Adresse(): string {
    return this._Adresse;
  }

  set Adresse(value: string) {
    this._Adresse = value;
  }

}
