import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { CatsService } from '../../core/services/cats-service/cats.service';
import { AlertController } from '@ionic/angular';
import { ICat } from '../../core/interfaces/cat.interface';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  styleUrls: ['./cats.page.scss'],
})

export class CatsPage implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  listCats: ICat[] = [];

  constructor(
    private catsService: CatsService,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.catsService
      .getCats()
      .pipe(takeUntil(this.destroy))
      .subscribe(
        (resp) => {
          if (resp && resp.length) this.listCats = resp;
        },
        () => {
          this.showErrorAlert();
        }
      );
  }

  async showErrorAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Ha ocurrido un error.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.complete();
  }
}
