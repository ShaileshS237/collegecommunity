import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: any;
  password: any;
  loading: boolean;
  constructor(
    public native: NativeService,
    public router: Router,
    public api: ApiService,
    public storage: StorageService
  ) {}

  ngOnInit() {}

  login() {
    this.loading = true;
    // this.native.presentLoading();
    const str = this.email;
    const chardetect = str.split('@').pop();
    console.log(chardetect);

    if (chardetect == this.email) {
      this.api
        .post('login', [
          { email: this.email + '@nitkkr.ac.in', password: this.password },
        ])
        .subscribe((val: any) => {
          this.loading = false;

          console.log(val);

          let userdatails: any = {
            id: val.result.id,
            name: val.result.name.split(' ')[0],
          };

          if (val.status == 200) {
            this.storage.setStorage('userdet', userdatails);
            this.router.navigateByUrl('/');
          } else if (val.status == 204) {
            this.native.presentToast(val.message).then((val2: any) => {
              console.log(val.id);

              setTimeout(() => {
                let navigateExtra: NavigationExtras = {
                  queryParams: {
                    id: val.id,
                  },
                };

                this.router.navigate(['/verifyemail'], navigateExtra);
              }, 2000);
            });
          } else {
            this.native.presentToast(val.message);
          }
        });
    } else {
      this.loading = false;
      this.native.presentToast(
        'Please remove @' + chardetect + ' from Mail ID'
      );
    }
  }
}
