import { Component ,OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { StatusBar } from "@capacitor/status-bar";
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    if (Capacitor.isNativePlatform()) {
      StatusBar.setOverlaysWebView({ overlay: false });

    }
  }

}
