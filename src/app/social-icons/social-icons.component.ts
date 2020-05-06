import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.css']
})
export class SocialIconsComponent implements OnInit {

  safeMailTo = "";

  constructor() { }

  ngOnInit(): void {
    { 
      let coded = "6XNNd6j@CbmNXy0u0.6Xp"
      let key = "lpYxV5j1AbfGwzkBJ8g3euavKTIF97CoqQ2sUEhncdm0MiPtLSrWXRHDyZ4ON6"
      let shift=coded.length
      let link=""
      for (let i=0; i<coded.length; i++) {
        if (key.indexOf(coded.charAt(i))==-1) {
          let ltr = coded.charAt(i)
          link += (ltr)
        }
        else {     
          let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
          link += (key.charAt(ltr))
        }
      }
      
      this.safeMailTo = link;
    }
  }

}
