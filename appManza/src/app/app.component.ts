import { Component } from '@angular/core';
import { UrlService } from "./consumirUrl.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

valoresUrl;
urlService;

constructor(private urlService: UrlService) {
	this.urlService = urlService;
}

consumirUrl(){
this.valoresUrl = this.urlService.getUrl();
}


}
