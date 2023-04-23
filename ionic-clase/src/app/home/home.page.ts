import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutService } from '../service/aut.service';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { MenuServiceService } from '../service/menu-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit{

  isLoged : any = false;

  constructor(
    private authService: AutService,
    private router: Router,
    private menuService: MenuServiceService

  ) {
      onAuthStateChanged(this.authService.getStateAuth(), user=>{
       if(user!=null && user != undefined){
         this.isLoged = true;
       }
      });
  }

  ngOnInit() {


  }
  onLogout(){
      signOut(this.authService.getStateAuth()).then(response=>{
        console.log("Logout!");
        this.menuService.setTitle('login');
        this.router.navigateByUrl('/login');
      }).catch(error=>{

      });
    }

}
