import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-categoryadds',
  templateUrl: './categoryadds.page.html',
  styleUrls: ['./categoryadds.page.scss'],
})
export class CategoryaddsPage implements OnInit {
  cid: any;
  popularads: any;
  constructor(
    private modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService,
    public route: ActivatedRoute
  ) {
    this.route.params.subscribe((val) => {
      console.log(val);
      this.cid = val.id;
      this.getProduct();
    });
  }

  ngOnInit() {}

  getProduct() {
    this.apiCtrl
      .post('getProductByID', { cid: this.cid })
      .subscribe((val: any) => {
        console.log(val);
        this.popularads = val.result;
      });
  }
}
