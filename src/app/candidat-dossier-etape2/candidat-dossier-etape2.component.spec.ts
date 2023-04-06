import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatDossierEtape2Component } from './candidat-dossier-etape2.component';

describe('CandidatDossierEtape2Component', () => {
  let component: CandidatDossierEtape2Component;
  let fixture: ComponentFixture<CandidatDossierEtape2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatDossierEtape2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatDossierEtape2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
