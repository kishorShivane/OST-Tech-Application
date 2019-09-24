import { Component, OnInit, Input } from '@angular/core';
import { Resident } from 'src/app/models/resident';
import { NotificationService } from 'src/app/services/notification.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-resident-list',
  templateUrl: './resident-list.component.html',
  styleUrls: ['./resident-list.component.css']
})
export class ResidentListComponent implements OnInit {
  @Input() resident: Resident[];
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private notify: NotificationService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 3
      //ordering: false,
      //searching: false,
    };
    //this.loadResidents();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  // loadResidents() {
  //     this.service.GetAllResidents().subscribe(data => {
  //       debugger;
  //       this.resident = data;
  //       this.toggleResultGrid();
  //     });
  // }

  toggleResultGrid() {
    var resultCount = this.resident.length;
    if ( resultCount > 0) {

      this.notify.shoInfo(resultCount+": records found!!","Information");
    }
    else {
      this.notify.shoInfo("No records found!!","Information")
    }
  }

}
