import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-ans-det',
  templateUrl: './ans-det.page.html',
  styleUrls: ['./ans-det.page.scss'],
})
export class AnsDetPage implements OnInit {
  qid: any;
  questiondeatils: any;
  answer: any;
  id: any;
  qanswer: any;
  type: any;
  showMsg: boolean;
  constructor(
    private modalCtrl: ModalController,
    public apiCtrl: ApiService,
    public strctrl: StorageService,
    public nativectrl: NativeService,
    public route: ActivatedRoute
  ) {
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);

      this.id = val.id;
    });
    this.route.params.subscribe((params) => {
      console.log(params);
      this.qid = params.id;
      this.type = params.type;
      this.getPost();
      this.fetchans();
    });
  }

  ngOnInit() {}

  getPost() {
    this.apiCtrl
      .post('fetchsinglequestion', { qid: this.qid })
      .subscribe((val: any) => {
        console.log(val);
        this.questiondeatils = val.result;
      });
  }

  answerQue() {
    console.log({ qid: this.qid, uid: this.id, answer: this.answer });

    this.apiCtrl
      .post('answer', { qid: this.qid, uid: this.id, answer: this.answer })
      .subscribe((val) => {
        console.log(val);
        this.fetchans();
        this.answer = null;
      });
  }

  fetchans() {
    this.showMsg = false;
    this.apiCtrl
      .post('fetchanswer', { qid: this.qid })
      .subscribe((val: any) => {
        console.log(val);

        this.qanswer = val.result;
        if (val.result.length == 0) {
          this.showMsg = true;
        }
      });
  }
}
