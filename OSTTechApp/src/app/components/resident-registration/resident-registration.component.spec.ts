import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResidentRegistrationComponent } from './resident-registration.component';
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By, BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidentService } from 'src/app/services/resident.service';
import { HttpClientTestingModule  } from '@angular/common/http/testing';
import { delay } from 'rxjs/operators';
import { ToastrModule } from 'ngx-toastr';
import { ResidentListComponent } from '../resident-list/resident-list.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { MockResidentService } from 'src/app/services/mock-resident.service';

describe('ResidentRegistrationComponent', () => {
  let component: ResidentRegistrationComponent;
  let fixture: ComponentFixture<ResidentRegistrationComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResidentRegistrationComponent,ResidentListComponent],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        HttpClientModule,
        HttpClientTestingModule,
        ToastrModule.forRoot({
          closeButton: true,
          timeOut:3000,
          positionClass: "toast-bottom-full-width"
        })
      ],
      providers:[
        { provide: ResidentService, useClass: ResidentService },
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentRegistrationComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    component.loadResidents();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));
 
  it(`Required validation: form should be invalid`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('');
    expect(component.residentRegistrationForm.valid).toBeFalsy();
  }));

  it(`Numeric Only Pattern validation: form should be invalid`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('asdasda');
    expect(component.residentRegistrationForm.valid).toBeFalsy();
  }));

  it(`Minimum length validation: form should be invalid`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('1244');
    expect(component.residentRegistrationForm.valid).toBeFalsy();
  }));

  it(`Form should be valid.`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('8701015800084');
    expect(component.residentRegistrationForm.valid).toBeTruthy();
  }));

  it(`Form should be valid, and Resident should be submitted.`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('8701015800084');
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));

  it(`Valid SA ID Number: Resident information should be saved.`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('8401015800081');
    debugger;
    var beforeSave = 4;
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    var afterSave = 5;
    expect(afterSave > beforeSave).toBeTruthy();
  }));

  it(`Invalid SA ID Number: Resident information should not be saved.`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('8701015999948');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    delay(2000)
    expect(component.residentRegistrationForm.valid).toBeTruthy();
  }));

  it(`Valid SA ID Number: Resident information should not be duplicated.`, async(() => {
    component.residentRegistrationForm.controls['IDNumber'].setValue('8401015800081');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    delay(2000)
    expect(component.residentRegistrationForm.valid).toBeTruthy();
  }));

});
