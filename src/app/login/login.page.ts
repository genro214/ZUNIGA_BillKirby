import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  username: string = '';
  password: string = '';

  accounts: any[] = [
    { accountUsername: 'superadmin', accountPassword: 'superadmin' },
    { accountUsername: 'admin', accountPassword: 'admin' },
    { accountUsername: 'user', accountPassword: 'user' },
    
  ];

  checkCredentials(username: string, password: string) {
    return this.accounts.some(
      (account) =>
        account.accountUsername === username &&
        account.accountPassword === password
    );
  }

  authenticate() {
    this.checkCredentials(this.username, this.password)
      ? this.alertLogin()
      : this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Failed. Please try again',
      duration: 5000,
    });
    toast.present();
  }

  async dismissToast() {
    const toast = await this.toastController.getTop();

    if (toast) {
      toast.dismiss();
    }
  }

  navigate() {
    this.router.navigate(['dashboard/home']);
  }

  async alertLogin() {
    const alert = await this.alertController.create({
      header: 'Logged In',
      subHeader: 'Success!',
      message: 'Account successfully logged in',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            localStorage.setItem('username', this.username); //setting session variable

            this.navigate();
          },
        },
      ],
    });

    await alert.present();
  }
}
