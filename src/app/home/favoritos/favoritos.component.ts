import { Component, OnInit } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { CardProdutoFavoritoComponent } from '../../components/card-produto-favorito/card-produto-favorito.component';
import { UsuariologadoService } from '../../usuariologado/usuariologado.service';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [MatList, MatListItem, CardProdutoFavoritoComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent implements OnInit {
  constructor(private router: Router, private service: UsuariologadoService) {
  }

  produtoss: Produto[] = [];

  ngOnInit() {
    this.service.listgostei().subscribe((data: Produto[]) => {
      this.produtoss = data;
    });
  }
  produtos = [
    {
        "id": "1",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+1",
        "title": "Produto 1",
        "price": 711.99,
        "stars": 4,
        "description": "Um ótimo produto para suas necessidades."
    },
    {
        "id": "2",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+2",
        "title": "Produto 2",
        "price": 420.15,
        "stars": 4,
        "description": "Perfeito para uso diário."
    },
    {
        "id": "3",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+3",
        "title": "Produto 3",
        "price": 169.81,
        "stars": 4,
        "description": "Excelente escolha para qualquer ocasião."
    },
    {
        "id": "4",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+4",
        "title": "Produto 4",
        "price": 281.8,
        "stars": 3,
        "description": "Feito com materiais de alta qualidade."
    },
    {
        "id": "5",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+5",
        "title": "Produto 5",
        "price": 555.55,
        "stars": 5,
        "description": "Design moderno e elegante."
    },
    {
        "id": "6",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+6",
        "title": "Produto 6",
        "price": 199.99,
        "stars": 4,
        "description": "Ideal para presentear alguém especial."
    },
    {
        "id": "7",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+7",
        "title": "Produto 7",
        "price": 899.49,
        "stars": 5,
        "description": "A solução que você estava procurando."
    },
    {
        "id": "8",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+8",
        "title": "Produto 8",
        "price": 315.25,
        "stars": 3,
        "description": "Muito prático e funcional."
    },
    {
        "id": "9",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+9",
        "title": "Produto 9",
        "price": 649.99,
        "stars": 4,
        "description": "Com ótimo custo-benefício."
    },
    {
        "id": "10",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+10",
        "title": "Produto 10",
        "price": 134.75,
        "stars": 3,
        "description": "Inovador e versátil."
    },
    {
        "id": "11",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+11",
        "title": "Produto 11",
        "price": 799.95,
        "stars": 5,
        "description": "Garante praticidade e conforto."
    },
    {
        "id": "12",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+12",
        "title": "Produto 12",
        "price": 275.49,
        "stars": 4,
        "description": "Um item indispensável para sua casa."
    },
    {
        "id": "13",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+13",
        "title": "Produto 13",
        "price": 387.33,
        "stars": 3,
        "description": "Durável e resistente."
    },
    {
        "id": "14",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+14",
        "title": "Produto 14",
        "price": 599.99,
        "stars": 4,
        "description": "Fácil de usar e manter."
    },
    {
        "id": "15",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+15",
        "title": "Produto 15",
        "price": 222.22,
        "stars": 3,
        "description": "Proporciona uma experiência única."
    },
    {
        "id": "16",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+16",
        "title": "Produto 16",
        "price": 450.0,
        "stars": 4,
        "description": "Design ergonômico e compacto."
    },
    {
        "id": "18",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+18",
        "title": "Produto 18",
        "price": 499.99,
        "stars": 4,
        "description": "Atende às mais altas exigências de qualidade."
    },
    {
        "id": "20",
        "imageUrl": "https://via.placeholder.com/150x180?text=Produto+20",
        "title": "Produto 20",
        "price": 444.75,
        "stars": 3,
        "description": "Com tecnologia de ponta."
    }
]
;


}
