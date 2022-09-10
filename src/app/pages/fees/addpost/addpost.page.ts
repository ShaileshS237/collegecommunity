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
  content: any = '';
  length: any = 0;
  progress: number;
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

  addpost() {}

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  color: any = 'success';

  checkPin(event) {
    this.progress = this.content.length / 750;
    this.length = this.content.length;
    console.log(this.content.length);
    if (this.progress > 1) {
      this.color = 'danger';
    } else {
      this.color = 'success';
    }
  }
}
