import {typeDiplome} from "./typeDiplome.model";
import {candidat, filiere} from "./candidat.model";
import {fichier} from "./fichier.model";
import {noteSemester} from "./notesSemester.model";

export interface diplome{

    idDiplome :  number;
    typeDiplome : typeDiplome;
    specialiteDiplome : string;
    anneeObtention : Date;
    etablissement : string;
    candidat : candidat;
    filieres : filiere[];
    fichier : fichier;
    notesSemester : noteSemester[];
}
