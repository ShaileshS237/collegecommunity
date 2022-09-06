import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.page.html',
  styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {
  md: any = {
    initialSlide: 0,
    slidesPerView: 1.3,
    speed: 400,
    spaceBetween: 0,
  };
  id: any;
  username: any;
  question: any;
  annonomus: false;
  questionResult: any;
  yourquestionResult: any;
  hideask: boolean = false;
  constructor(
    private modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService,
    public nativectrl: NativeService
  ) {}

  ngOnInit() {
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);
      this.id = val.id;
      this.username = val.name;
      this.getQuestion();
      this.getYourQuestion();
    });
  }

  askquestion() {
    this.hideask = true;
    this.apiCtrl
      .post('addquestion', { question: this.question, uid: this.id })
      .subscribe((val) => {
        this.hideask = false;
        console.log(val);
        this.getYourQuestion();
      });
  }

  getQuestion() {
    this.apiCtrl
      .post('fetchquestion', { uid: this.id })
      .subscribe((val: any) => {
        console.log(val);
        this.questionResult = val.result;
      });
  }

  getYourQuestion() {
    this.apiCtrl
      .post('fetchyourquestion', { uid: this.id })
      .subscribe((val: any) => {
        console.log(val);
        this.yourquestionResult = val.result;
        console.log(this.yourquestionResult);
      });
  }

  async deletePost(id: any) {
    await this.nativectrl.presentLoading();
    this.apiCtrl
      .post('deletequestion', { id: id })
      .subscribe(async (val: any) => {
        console.log(val);
        await this.nativectrl.dismiss();
        this.getYourQuestion();
      });
  }
}
