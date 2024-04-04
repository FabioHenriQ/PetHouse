import { Component } from '@angular/core';

@Component({
  selector: 'app-card-donate',
  standalone: true,
  imports: [],
  templateUrl: './card-donate.component.html',
  styleUrl: './card-donate.component.css'
})
export class CardDonateComponent {
  cardDonateInfo = {
    card: [{
      text: 'Comida',
      img: '../../../assets/icons/comida.png',
      alt: 'Comida'
    },
    {
      text: 'Objetos',
      img: './../../assets/icons/racao.png',
      alt: 'Objetos'
    },
    {
      text: 'Brinquedos',
      img: './../../assets/icons/brinquedo.png',
      alt: 'Brinquedos'
    },
    {
      text: 'Transporte',
      img: './../../assets/icons/carro.png',
      alt: 'Transporte'
    },
    {
      text: 'Coleira',
      img: './../../assets/icons/coleira.png',
      alt: 'Coleira'
    },
    {
      text: 'Vitaminas',
      img: './../../assets/icons/remedio.png',
      alt: 'Vitaminas'
    },
    {
      text: 'Higiene',
      img: './../../assets/icons/shampoo.png',
      alt: 'Higiene'
    },
    {
      text: 'Medicamentos',
      img: './../../assets/icons/seringa.png',
      alt: 'Medicamentos'
    },
    {
      text: 'Casinha de Pets',
      img: './../../assets/icons/casinha-de-cachorro.png',
      alt: 'Casinha de Pets'
    }]
  }
}
