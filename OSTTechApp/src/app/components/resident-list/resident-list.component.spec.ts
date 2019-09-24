import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ Resident} from  '../../models/resident'
import { ResidentListComponent } from './resident-list.component';
import { DataTablesModule } from 'angular-datatables';
import { ResidentRegistrationComponent } from '../resident-registration/resident-registration.component';
import { ResidentService } from 'src/app/services/resident.service';
import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ResidentListComponent', () => {
  let component: ResidentListComponent;
  let fixture: ComponentFixture<ResidentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[DataTablesModule,
        ToastrModule.forRoot({
        closeButton: true,
        timeOut:3000,
        positionClass: "toast-bottom-full-width"
      })],
      declarations: [ ResidentListComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentListComponent);
    component = fixture.componentInstance;
    component.resident = [{IDNumber:"",CitizenShip:true,DateOfBirth:new Date(),Gender:"Male"}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
