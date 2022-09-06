import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.page.html',
  styleUrls: ['./addpost.page.scss'],
})
export class AddpostPage implements OnInit {
  username: any;
  id: any;
  content: any;
  constructor(
    public modal: ModalController,
    public strctrl: StorageService,
    public apictrl: ApiService
  ) {}

  ngOnInit() {
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);
      this.id = val.id;
      this.username = val.name;
    });
  }

  addpost() {
    this.apictrl
      .post('addpost', { id: this.id, content: this.content })
      .subscribe((val: any) => {
        console.log(val);
        if (val.status == 200) {
          this.modal.dismiss(val.status, 'confirm');
        }
      });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }
}
