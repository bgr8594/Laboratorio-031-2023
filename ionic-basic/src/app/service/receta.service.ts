import { Injectable } from '@angular/core';
import { Receta } from '../interface/receta';


@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  recetas: Receta[]=[
    {
      id: 1, 
      nombre: 'Pizza', 
      image: 'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/04/pizzapepperoni0.jpg',
      ingredientes: ["queso","salsa", "peperoni", "harina", "especies","sal"]
    },
    {
      id: 2,
      nombre: 'Burger',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/12/1b/9e/cb/normal-burger.jpg',
      ingredientes: ["Dos panes","Carne", "Lechuga","Tomate","Catsup", "Mayonesa"]
    },
    {
      id: 3, 
      nombre: 'Paletas de fresa con chamoy', 
      image: 'https://images.aws.nestle.recipes/resized/f1b3167c3cff6274361a3f7a87974be2_paletas_de_fresa_con_chamoy_1200_600.jpg',
      ingredientes: [
        '2 Tazas de Fresas congeladas'
        ,'1 1/2 Tazas de Agua'
        ,'1/2 Taza de Azúcar'
        ,'8 Vasos de plástico (4 oz c/u)'
        ,'8 Vasos de plástico (1 oz c/u)'
        ,'8 Palitos de madera para paleta'
        ,'1/2 Taza de Concentrado de jamaica'
        ,'4 Cucharadas de Chile con limón en polvo'
        ,'1 Cucharada de Jugo MAGGI'
        ,'1/4 Taza de Chamoy líquido'

      ]
    },
    {
      id: 4, 
      nombre: 'Pollo a la mexicana', 
      image: 'https://d1uz88p17r663j.cloudfront.net/resized/08d45a55fe49e611abde012a9b72d8bb_POLLO_A_LA_MEXICANA_150_1200_600.jpg',
      ingredientes: [
        '1/2 Cebolla asada'
        ,'2 Dientes de Ajo asados'
        ,'4 Jitomates asados'
        ,'1/2 Taza de Agua'
        ,'2 Cubos de Concentrado de Tomate con Pollo CONSOMATE'
        ,'2 Cucharadas de Aceite de maíz'
        ,'1/2 Cebolla fileteada'
        ,'5 Muslos o piernas de pollo cocidos'
        ,'3 Jitomates cortados en cubos pequeños'
        ,'2 Chiles jalapeño cortados en tiras'
        ,'2 Ramitas de Cilantro fresco desinfectadas y picadas finamente'
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
