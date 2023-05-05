import {typeDiplome} from "./typeDiplome.model";
import {Candidat, filiere} from "./candidat.model";
import {fichier} from "./fichier.model";
import {noteSemester} from "./notesSemester.model";

export interface Diplome{

    idDiplome :  number;
    typeDiplome : typeDiplome;
    specialiteDiplome : string;
    anneeObtention : Date;
    etablissement : string;
    candidat : Candidat;
    filieres : filiere[];
    fichier : fichier;
    notesSemester : noteSemester[];
}
