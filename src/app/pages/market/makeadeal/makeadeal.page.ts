import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-makeadeal',
  templateUrl: './makeadeal.page.html',
  styleUrls: ['./makeadeal.page.scss'],
})
export class MakeadealPage implements OnInit {
  @Input() id: any;
  @Input() name: any;
  @Input() price: any;
  @Input() uid: any;
  @Input() cuid: any;
  message: any;
  content: any;
  showForm: boolean = false;

  constructor(
    public modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService,
    public native: NativeService
  ) {}

  ngOnInit() {
    this.getNotification();
    function toTitleCase(str) {
      return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    }

    console.log(this.id, this.name, this.price, this.uid);
    this.content =
      'Hey ' +
      toTitleCase(this.name) +
      ' I am interested in this item for Rs.' +
      this.price +
      ', Please accept my request and so that I can contact you';
  }

  cancel() {
    this.modalCtrl.dismiss();
  }

  getNotification() {
    this.apiCtrl
      .post('getNotification', { aid: this.id, sid: this.cuid, rid: this.uid })
      .subscribe((val: any) => {
        console.log(val);
        if (val.result.length == 1) {
          this.showForm = true;
        }
      });
  }

  sendRequest() {
    this.apiCtrl
      .post('addNotification', {
        aid: this.id,
        sid: this.cuid,
        rid: this.uid,
        message: this.content,
      })
      .subscribe((val: any) => {
        console.log(val);

        if (val.status == 200) {
          this.native.presentToast('Request Send Succefully');
          this.modalCtrl.dismiss();
        }
      });
  }
}
