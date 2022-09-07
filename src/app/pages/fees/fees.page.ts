import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';
import { AddpostPage } from './addpost/addpost.page';
@Component({
  selector: 'app-fees',
  templateUrl: './fees.page.html',
  styleUrls: ['./fees.page.scss'],
})
export class FeesPage implements OnInit {
  title = 'angularTests';
  list = ['Deatil', 'Notification'];
  post: any;
  id: any;
  username: any;
  disable: boolean;
  constructor(
    private modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService
  ) {}

  ngOnInit() {
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);
      this.id = val.id;
      this.username = val.name;
    });
    this.getPost();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddpostPage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role == 'confirm') {
      this.getPost();
    }
  }

  getPost() {
    this.apiCtrl.get('getpost').subscribe((val: any) => {
      console.log(val);
      this.post = val.result;
    });
  }

  isLiked: boolean = false;

  like(pid: any, like: any) {
    this.isLiked = true;
    this.disable = true;
    console.log(pid);

    // this.apiCtrl
    //   .post('like', { pid: pid, uid: this.id, likes: like })
    //   .subscribe((val) => {
    //     console.log(val);
    //   });
  }
}
