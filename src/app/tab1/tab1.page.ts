import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/Products/product.service';
import { ModalController } from '@ionic/angular';
import { ModalEditComponentComponent } from '../modal-edit-component/modal-edit-component.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  constructor(
    private productService: ProductService,
    private modalCtrl: ModalController
  ) {}

  productList: any[] = [];

  ngOnInit(): void {
    console.log('tab1');
  }

  ionViewDidEnter() {
    this.getProducts();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  async getProducts() {
    try {
      this.productService.getProducts().subscribe(
        (item) => {
          this.productList = item;
          console.log(this.productList);
        },
        (error) => {
          console.log('Error getting products', error);
        }
      );
    } catch (error) {
      console.log('Error in getProducts', error);
    }
  }

  async edit(item: any) {
    const modal = await this.modalCtrl.create({
      component: ModalEditComponentComponent,
      componentProps: {
        product: item,
      },
    });

    await modal.present();

    const { data, role } = await modal.onWillDismiss();
    if (role === 'save') {
      // Actualizamos el producto en la lista con los datos actualizados
      const index = this.productList.findIndex((p) => p.id === data.id);
      if (index !== -1) {
        this.productList[index] = data;
      }
      console.log('Saved data:', data);
    }
  }
}
