
export interface candidat{

   username: string;
   Prenom : string;
   nom:string;
   CNI:string;
   Email: string;
   Telephone:string;
   Adresse:string;
   dateNaissance: Date;
   mdp:string;
   Filieres : filiere[];
   ville:string;
   admis:boolean;
   CNE:string;
}
export interface filiere {
  _idFiliere: number;
  _intitule: string;


}
