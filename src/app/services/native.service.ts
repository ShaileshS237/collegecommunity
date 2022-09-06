import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class NativeService {
  isLoading = false;

  constructor(
    public toastController: ToastController,
    public loadingController: LoadingController
  ) {}

  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
    });
    toast.present();
  }

  async presentLoading() {
    this.isLoading = true;
    return await this.loadingController
      .create({
        // duration: 5000,
        cssClass: 'toast-class',
        message: 'Please wait...',
      })
      .then((a) => {
        a.present().then(() => {
          console.log('presented');
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort presenting'));
          }
        });
      });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController
      .dismiss()
      .then(() => console.log('dismissed'));
  }
}
