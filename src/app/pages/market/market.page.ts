import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { category } from 'src/app/staticdata/category';
import { AddadsPage } from './addads/addads.page';

@Component({
  selector: 'app-market',
  templateUrl: './market.page.html',
  styleUrls: ['./market.page.scss'],
})
export class MarketPage implements OnInit {
  categoryData = category;
  id: any;
  username: any;
  popularads: any;
  constructor(
    private modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService
  ) {}

  ngOnInit() {
    this.getPost();
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);
      this.id = val.id;
      this.username = val.name;
    });
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddadsPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    // if (role == 'confirm') {
    //   this.getPost();
    // }
  }

  getPost() {
    this.apiCtrl.get('getads').subscribe((val: any) => {
      console.log(val);
      this.popularads = val.result;
    });
  }
}
