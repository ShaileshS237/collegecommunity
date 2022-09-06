import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.page.html',
  styleUrls: ['./registation.page.scss'],
})
export class RegistationPage implements OnInit {
  hide = true;
  email: any;
  name: any;
  mobile: any;
  password: any;
  branchs: any;
  branch: any;
  program: any;
  constructor(
    public native: NativeService,
    public router: Router,
    public api: ApiService
  ) {}

  ngOnInit() {
    // this.getBranch();
  }

  getBranch() {
    this.branch = null;
    this.api
      .post('getbranch', { programme: this.program })
      .subscribe((val: any) => {
        console.log(val);
        if (val.status == 200) {
          this.branchs = val.data;
        }
      });
  }

  register() {
    this.native.presentLoading();
    const str = this.email;
    const chardetect = str.split('@').pop();
    console.log(chardetect);
    if (chardetect == this.email) {
      this.api
        .post('register', [
          {
            name: this.name,
            email: this.email,
            mobile: this.mobile,
            password: this.password,
            program: this.program,
            branch: this.branch,
          },
        ])
        .subscribe((val: any) => {
          console.log(val);

          this.native.dismiss();
          if (val.status == 200) {
          }

          if (val.status == 204) {
            this.native
              .presentToast('Email Already Registered, Please Login')
              .then((val) => {
                this.router.navigateByUrl('/login');
              });
          }
        });
    } else {
      this.native.presentToast(
        'Please remove @' + chardetect + ' from Mail ID'
      );
    }
  }
}
