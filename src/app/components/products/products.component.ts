import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product [] = [
    {
      id: '1',
      name: 'Computador Portátil Gamer ACER 15.6" Pulgadas 513J Intel Ci5 - RAM 8GB - Disco SSD 1TB - Negro',
      image: './assets/images/Laptop-Gamer.jpg',
      price: 4599000
    },
    {
      id: '2',
      name: 'Computador Portátil Gamer ACER 15.6" Pulgadas 504Y Intel Ci5 - RAM 8GB - Disco SSD 1TB - Negro',
      image: './assets/images/Laptop-Gamer-2.jpg',
      price: 3699000
    },
    {
      id: '3',
      name: 'Computador Portátil ASUS TUF Gaming F15 15,6" Pulgadas FX506LH - Intel Core I5 - RAM 8GB - Disco SSD 512 GB - Negro',
      image: './assets/images/Laptop-Gamer-3.jpg',
      price: 3399000
    },
    {
      id: '4',
      name: 'Computador Portátil Gamer Victus HP 16.1" Pulgadas d0504la - Intel Core i5 - RAM 8GB - Disco SSD 512 GB - Azul Intenso',
      image: './assets/images/Laptop-Gamer-4.jpg',
      price: 3449000
    },
    {
      id: '5',
      name: 'Computador Portátil ASUS TUF Dash 15,6" Pulgadas FX517ZC - Intel Core i5 - RAM 16GB - Disco SSD 512 GB - Negro',
      image: './assets/images/Laptop-Gamer-5.jpg',
      price: 4799000
    },
    {
      id: '6',
      name: 'Computador Portátil Gamer LENOVO 15,6" Pulgadas IdeaPad Gaming 3 - Intel Core i5 - RAM 8GB - Disco SSD 512GB - Negro',
      image: './assets/images/Laptop-Gamer-6.jpg',
      price: 3999000
    },
    {
      id: '7',
      name: 'Computador Portátil Gamer Victus HP 16.1" Pulgadas d0507la - Intel Core i5 - RAM 8GB- Disco SSD 512 GB - Azul',
      image: './assets/images/Laptop-Gamer-7.jpg',
      price: 4149000

    },
    {
      id: '8',
      name: 'Computador Portátil Gamer LENOVO 15.6" Pulgadas IdeaPad Gaming 3 - AMD Ryzen 5 - RAM 8GB - Disco SSD 512GB - Blanco',
      image: './assets/images/Laptop-Gamer-8.jpg',
      price: 4499000
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
