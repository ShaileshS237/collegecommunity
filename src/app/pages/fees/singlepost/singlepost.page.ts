import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NativeService } from 'src/app/services/native.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.page.html',
  styleUrls: ['./singlepost.page.scss'],
})
export class SinglepostPage implements OnInit {
  id: any;
  post: any;
  pid: any;
  comments: any;
  constructor(
    public route: ActivatedRoute,
    public apictrl: ApiService,
    public strctrl: StorageService,
    public nativectrl: NativeService
  ) {
    this.route.params.subscribe((params) => {
      console.log(params);
      this.pid = params.id;
      this.getSinglePost();
      this.fetchcomments();
    });
    this.strctrl.getStorage('userdet').then((val) => {
      console.log(val);

      this.id = val.id;
    });
  }

  ngOnInit() {}

  getSinglePost() {
    this.apictrl
      .post('getsinglepost', { pid: this.pid })
      .subscribe((val: any) => {
        console.log(val);
        this.post = val.result;
      });
  }
  ucomment: any;
  comment() {

    this.apictrl
      .post('comment', {
        pid: this.pid,
        uid: this.id,
        comment: this.ucomment,
        count: this.post[0].comments,
      })
      .subscribe((val) => {
        console.log(val);
        this.fetchcomments();
        this.ucomment = null;
      });
  }

  fetchcomments() {
    this.apictrl
      .post('fetchcomments', { pid: this.pid })
      .subscribe((val: any) => {
        console.log(val);
        this.comments = val.result;
      });
  }
}
