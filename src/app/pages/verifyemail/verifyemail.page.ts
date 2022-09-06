import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.page.html',
  styleUrls: ['./verifyemail.page.scss'],
})
export class VerifyemailPage implements OnInit {
  id: any;
  otp: any;
  public settings = {
    length: 4,
    numbersOnly: true,
    timer: 0,
    btnClass: 'display',
    inputStyles: {
      //  'font-color':'black',
      width: '50px',
      height: '50px',
      //  border: '2px solid white',
      'border-radius': '7px',
      //  'font-weight': 'bolder',
      //  color: 'white',
    },
  };
  constructor(
    public route: ActivatedRoute,
    public apictrl: ApiService,
    public nativeCtrl: NativeService,
    public router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
      console.log(this.id);
    });
  }

  ngOnInit() {}

  verifyemail() {
    this.apictrl
      .post('verifyemail', { id: this.id, otp: this.otp })
      .subscribe((val: any) => {
        if (val.status == 200) {
          this.router.navigateByUrl('/');
        } else {
          this.nativeCtrl.presentToast(val.message);
        }
      });
  }
}
