import { Component, ElementRef, Renderer2 } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validator, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-add-direction-pedagogique',
  templateUrl: './add-direction-pedagogique.component.html',
  styleUrls: ['./add-direction-pedagogique.component.css']
})
export class AddDirectionPedagogiqueComponent {
  constructor(
    private router: Router,
    private messageService: MessageService,
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  AddDirectionFormGroup: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    prenom: new FormControl("", [Validators.required]),
    cin: new FormControl("", [Validators.required]),
    cne: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    telephone: new FormControl("", [Validators.required]),
    adresse: new FormControl("", [Validators.required]),
  });
}
