import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  getTravels() {
    let friends = [
      {
        id: 1,
        local: "Cancun - Mexico",
        description: "Cancún, uma cidade mexicana situada na Península de Iucatã, na costa do Mar do Caribe, é conhecida por suas praias, seus vários resorts e sua vida noturna.",
        date: "16/04/2019",
        image: "https://blogmaladeviagem.com.br/wp-content/uploads/2016/11/Blog-Mala-de-Viagem-cancun.jpg"
      },
      {
        id: 2,
        local: "Ibiza - Espanha",
        description: "Ibiza é uma das ilhas Baleares, um arquipélago da Espanha situado no Mar Mediterrâneo. Ela é conhecida pela animada vida noturna da cidade de Ibiza e de Sant Antoni, onde importantes casas noturnas europeias têm postos avançados de verão. ",
        date: "07/10/2019",
        image: "https://www.costacruzeiros.com/content/dam/costa/costa-magazine/articles-magazine/travel/ibiza-travel/ibiza_m.jpg.image.694.390.low.jpg"
      },
    ];
    return friends;
  }

  constructor() { }
}
