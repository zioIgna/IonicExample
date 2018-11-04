import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";

@Component({
  selector: 'page-buyout',
  templateUrl: 'buyout.html'
})
export class BuyoutPage {
  item: {name: string, quantity: number}

  constructor(private navParams: NavParams, private navCtrl: NavController) {
    this.item = navParams.data;
  }

  onBuy() {
    this.navCtrl.popToRoot();
  }

}
