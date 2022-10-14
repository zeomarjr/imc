import { Component } from '@angular/core';
import { Renderer2 } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private renderer : Renderer2){}

  altura : string
  peso: string
  imc: string
  saida: string

  mudarTema(){
    this.renderer.setAttribute(document.body, 'color-theme', 'dark')
  }
  
trocaTema(event){
  if(event.detail.checked){
    this.renderer.setAttribute(document.body, 'color-theme', 'dark')
  }else{
    this.renderer.setAttribute(document.body, 'color-theme', 'light')
  }
}
}


