import {Candidat} from "./Candidat.model";
import {Fichier} from "./Fichier.model";

export interface Diplome {
  id: number;
  typeDiplome: string;
  specialiteDiplome: string;
  anneeObtention: Date;
  etablissement: string;
  candidat: Candidat;
  // filieresDto: FiliereDto[];
  fichier: Fichier;
  // notesSemesterDto: NotesSemesterDto[];
}
