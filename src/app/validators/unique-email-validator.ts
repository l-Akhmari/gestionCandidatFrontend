import {AbstractControl, AsyncValidator, ValidationErrors} from "@angular/forms";
import {map, Observable} from "rxjs";
import {AuthenticationService} from "../services/authentication.service";
import {Injectable} from "@angular/core";
@Injectable()
export class UniqueEmailValidator implements AsyncValidator{
  constructor(private authService : AuthenticationService) {
  }
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    let email = control.value;
    return this.authService.isEmailAvailable(email).pipe(
      map((result)=>{
        if (result==true) return null
        else return {emailDuplicated : true}
      })
    );
  }

}
