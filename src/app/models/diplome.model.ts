import {candidat} from "./candidat.model";
import {filiere} from "./filiere.model";

export class diplome{
  titre! : string;
  specialite! : string;
  dateObtention! : string;
  etablissement! : string;
  fichier! : String;
  candidat! : candidat;
  filiere! : filiere;



  constructor() {
  }
}
