import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { ResidentService } from 'src/app/services/resident.service';
import { NgSwitchCase } from '@angular/common';
import { Resident } from 'src/app/models/resident';

@Component({
  selector: 'app-resident-registration',
  templateUrl: './resident-registration.component.html',
  styleUrls: ['./resident-registration.component.css']
})
export class ResidentRegistrationComponent implements OnInit {
  residentRegistrationForm: FormGroup;
  submitted = false;
  resident: Resident[];

  constructor(private formBuilder: FormBuilder, private notify: NotificationService, private service: ResidentService) { }

  ngOnInit() {
    this.declareResidentRegistrationForm();
    this.loadResidents();
  }

  declareResidentRegistrationForm() {
    this.residentRegistrationForm = this.formBuilder.group({
      IDNumber: ['', [Validators.required, Validators.minLength(13),
      Validators.pattern('[0-9]*')]]
    });
  }

  loadResidents() {
    this.service.GetAllResidents().subscribe(data => {
      debugger;
      this.resident = data;
    });
  }

  get f() { return this.residentRegistrationForm['controls']; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.residentRegistrationForm.invalid) {
      return;
    }
    let resident = this.residentRegistrationForm.value;
    console.log(resident);
    this.notify.shoInfo(resident.IDNumber + "Submitted for validation!!", "");
    this.service.ValidateResidentNumber(resident.IDNumber).subscribe(data => {
      debugger;
      if (data != null && data != undefined) {
        switch (data.status) {
          case 0:
            this.notify.showWarning(data.message, "");
            break;
          case 1:
            this.notify.showSuccess(data.message, "");
            break;
          case -2:
            this.notify.showWarning(data.message, "");
            break;
          default:
            this.notify.showError(data.message, "");
            break;
        }
      }
      else { this.notify.showError("An error occured while processing the request!!", ""); }
      this.loadResidents();
      this.residentRegistrationForm.controls["IDNumber"].setErrors(null);
      this.residentRegistrationForm.patchValue({ IDNumber: "" });
    })
  };
}
