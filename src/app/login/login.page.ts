import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AuthGuard } from '../guards/auth/auth-guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private authentication: AuthGuard
  ) {}

  username: string = '';
  password: string = '';

  authenticate() {
    this.authentication.checkaccount(this.username, this.password);
    this.authentication.authenticate
      ? this.alertLogin()
      : this.presentToast();
    }

    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Login Failed. Please try again',
        duration: 2000,
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
        message: 'You are successfuly login' ,
      
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
  