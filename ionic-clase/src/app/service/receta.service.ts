import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Fajitas de pollo', 
      image: 'https://th.bing.com/th/id/OIP.yCD8-h9YZfZL44xPNyx4LQHaD6?pid=ImgDet&rs=1',
      ingredientes: ["pollo","morron", "cebolla", "especies","sal"]
    },
    {
      id: 2,
      nombre: 'Hamburguesa',
      image: 'https://th.bing.com/th/id/R.b3da7880e2615e508b65861ca2111cd0?rik=Lv1WIT1qtI%2fp6w&pid=ImgRaw&r=0',
      ingredientes: ["Dos panes","Carne", "Lechuga","Tomate","Catsup", "Mayonesa","Tocino"]
    },
    {
      id: 3, 
      nombre: 'Huevos estrellados', 
      image: 'https://www.recetasderechupete.com/wp-content/uploads/2019/11/huevos-rotos-1.jpg',
      ingredientes: [
        '1 k de patatas especiales para freír (6-7 patatas)'
        ,'6 huevos grandes camperos'
        ,'Sal y pimienta negra recién molida'
        ,'Aceite de oliva virgen extra '
        ,'1 cebolla'
        ,'Jamón'
      ]
    },
    {
      id: 4, 
      nombre: 'Boneless', 
      image: 'https://d1uz88p17r663j.cloudfront.net/resized/08d45a55fe49e611abde012a9b72d8bb_POLLO_A_LA_MEXICANA_150_1200_600.jpg',
      ingredientes: [
        'Pechugas de pollo en cubos'
        ,'Harina , 2 tazas'
        ,'Maicena , 1 taza'
        ,'Cantidad suficiente de aceite para freir'
        ,'Salsa Búfalo , 1/2 taza'
        ,'Agua fría , 1 taza'
        ,'Salsa Habanero , 1/2 taza'
        ,'Pulpa de mango , 1/2 taza'
        ,'Hojuelas chile seco rojo , 2 cucharadas'
        ,'Jugo de limón , 1/4 de taza'
      ]
    } 
  ];

  constructor() { }

  getReceta(idReceta: number){
    return {...this.recetas.find(
      (receta: Receta) =>{
        return receta.id ===idReceta
      }
    )};
  }

  getRecetas(){
    return[...this.recetas];
  }
}