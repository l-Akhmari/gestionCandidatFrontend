import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
  providers: [MessageService]
})
export class AccueilComponent {
  formations: any[] = [
    {
      id : 1,
      label: 'MRMI - Mécanique, Robotique et Matériaux Innovants',
      group: 'Diplôme : Master de Recherche'
    },
    {
      id: 2,
      label: 'SDIA - Systèmes Distribués et Intelligence Artificielle',
      group: 'Diplôme : Master de Recherche'
    },
    {
      id: 3,
      label: 'GLSID - Génie du Logiciel et des Systèmes Informatiques Distribués ',
      group: 'Diplôme : Ingénieur d\'état'
    },
    {
      id: 4,
      label: 'BDCC - Ingénierie Informatique : Big Data et Cloud Computing',
      group: 'Diplôme : Ingénieur d\'état'
    },
    {
      id: 5,
      label: 'GIL - Génie Industriel et Logistique ',
      group: 'Diplôme : Ingénieur d\'état'
    },
    {
      id: 6,
      label: 'GMSI - Génie Mécanique des Systèmes Industriels',
      group: 'Diplôme : Ingénieur d\'état'
    },
    {
      id:7,
      label: 'GECSI - Génie Electrique et Contrôle des Systèmes Industriels',
      group: 'Diplôme : Ingénieur d\'état'
    },
    {
      id: 8,
      label: 'SEER - Génie Electrique option : Systèmes Electriques et Energies Renouvelables',
      group: 'Diplôme : Ingénieur d\'état'
    },
    {
      id: 9,
      label: 'ESEG - Education et Sciences Economiques et de Gestion',
      group: 'Diplôme : Licence d\'Etudes Professionnelles'
    },
    {
      id: 10,
      label: 'FC - Finance et Comptabilité',
      group: 'Diplôme : Diplôme Universitaire de Technologie'
    },
    {
      id: 11,
      label: 'AOE - Administration et Organisation des Entreprises',
      group: 'Diplôme : Diplôme Universitaire de Technologie'
    }];

  onButtonClick(formation: any) {
    console.log('la formation :', formation.label)

  }
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'la formation :'});  }

  onTabChange($event: any) {
    console.log('Tab Changed:', $event.index);

  }

}


