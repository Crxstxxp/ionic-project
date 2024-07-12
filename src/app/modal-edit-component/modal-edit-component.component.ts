import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-edit-component',
  templateUrl: './modal-edit-component.component.html',
  styleUrls: ['./modal-edit-component.component.scss'],
})
export class ModalEditComponentComponent implements OnInit {

  @Input() product: any;
  updatedProduct: any;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.updatedProduct = { ...this.product };
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  async saveChanges() {
    await this.modalCtrl.dismiss(this.updatedProduct, 'save');
  }
}
