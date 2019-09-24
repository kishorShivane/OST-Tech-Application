import { Resident } from "../models/resident";
import { Observable } from 'rxjs';

const residents: Resident[] = [{ IDNumber: "7708176041185", CitizenShip: true, DateOfBirth: new Date(), Gender: "Male" },
{ IDNumber: "7708170041185", CitizenShip: true, DateOfBirth: new Date(), Gender: "Female" },
{ IDNumber: "7708177041185", CitizenShip: true, DateOfBirth: new Date(), Gender: "Male" },
{ IDNumber: "7708170090185", CitizenShip: false, DateOfBirth: new Date(), Gender: "Female" }];

export class MockResidentService {

  GetAllResidents(): Resident[] {
    return Observable.create(residents);
  }

  ValidateResidentNumber(resident: string): number {
    debugger;
    var result: string;
    result = validateRSAidnumber(resident);
    if (result.length > 0) {
      return Observable.create({status:0,message:""});
    }
    else {
      var x = residents.filter(function (item) {
        item.IDNumber === resident;
      })[0];
      if (x) {
        residents.push({ IDNumber: resident, Gender: "", DateOfBirth: new Date(), CitizenShip: true });
        return Observable.create({status:1,message:""});
      }
      else {
        return Observable.create({status:-2,message:""});
      }
    }
  }
}


function validateRSAidnumber(idnumber) {

  var invalid = 0;

  // display debugging
  var debug = "";

  // check that value submitted is a number
  if (isNaN(idnumber)) {
    debug = debug + 'Value supplied is not a valid number.<br />';
    invalid++;
  }

  // check length of 13 digits
  if (idnumber.length != 13) {
    debug = debug + 'Number supplied does not have 13 digits.<br />';
    invalid++;
  }

  // check that YYMMDD group is a valid date
  var yy = idnumber.substring(0, 2),
    mm = idnumber.substring(2, 4),
    dd = idnumber.substring(4, 6);

  var dob = new Date(yy, (mm - 1), dd);

  // check values - add one to month because Date() uses 0-11 for months
  if (!(((dob.getFullYear() + '').substring(2, 4) == yy) && (dob.getMonth() == mm - 1) && (dob.getDate() == dd))) {
    debug = debug + 'Date in first 6 digits is invalid.<br />';
    invalid++;
  }

  // evaluate GSSS group for gender and sequence 
  var gender = parseInt(idnumber.substring(6, 10), 10) > 5000 ? "M" : "F";

  // ensure third to last digit is a 1 or a 0
  if (idnumber.substring(10, 11) > 1) {
    debug = debug + 'Third to last digit can only be a 0 or 1 but is a ' + idnumber.substring(10, 11) + '.<br />';
    invalid++;
  } else {
    // determine citizenship from third to last digit (C)
    var saffer = parseInt(idnumber.substring(10, 11), 10) === 0 ? "C" : "F";
  }

  // ensure second to last digit is a 8 or a 9
  if (idnumber.substring(11, 12) < 8) {
    debug = debug + 'Second to last digit can only be a 8 or 9 but is a ' + idnumber.substring(11, 12) + '.<br />';
    invalid++;
  }

  // calculate check bit (Z) using the Luhn algorithm
  var ncheck = 0,
    beven = false;

  for (var c = idnumber.length - 1; c >= 0; c--) {
    var cdigit = idnumber.charAt(c),
      ndigit = parseInt(cdigit, 10);

    if (beven) {
      if ((ndigit *= 2) > 9) ndigit -= 9;
    }

    ncheck += ndigit;
    beven = !beven;
  }

  if ((ncheck % 10) !== 0) {
    debug = debug + 'Checkbit is incorrect.<br />';
    invalid++;
  }

  // if one or more checks fail, display details
  if (invalid > 0) {
    return debug;
  }
  return "";

  // return (ncheck % 10) === 0;
}
