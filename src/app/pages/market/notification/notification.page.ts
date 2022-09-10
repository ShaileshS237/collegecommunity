import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  segment: any = 'sell';
  constructor() {}

  ngOnInit() {}

  segmentChanged() {
    console.log(this.segment);
  }

  g;
}
