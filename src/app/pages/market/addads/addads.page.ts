import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { category } from 'src/app/staticdata/category';

@Component({
  selector: 'app-addads',
  templateUrl: './addads.page.html',
  styleUrls: ['./addads.page.scss'],
})
export class AddadsPage implements OnInit {
  categoryData = category;
  id: any;
  username: any;
  title: any;
  discription: any;
  price: any;
  category: any;
  constructor(
    private modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService
  ) {
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);
      this.id = val.id;
      this.username = val.name;
    });
  }

  ngOnInit() {}

  cancel() {
    this.modalCtrl.dismiss();
  }

  addpost() {
    this.apiCtrl
      .post('addad', {
        uid: this.id,
        category: this.category,
        title: this.title,
        content: this.discription,
        amount: this.price,
      })
      .subscribe((val: any) => {
        console.log(val);
      });
  }
}
