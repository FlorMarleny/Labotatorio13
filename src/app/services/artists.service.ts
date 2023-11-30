import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsService {
  private artists: Artist[] = [
    {
      nombre: 'Karol G',
      biografia:
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
      img: 'assets/img/img1.jpeg',
      aparicion: '1980-11-05',
      genero: 'Reggaeton',
      idioma: 'Inglés',
    },
    {
      nombre: 'Becky G ',
      biografia:
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
      img: 'assets/img/img2.jpg',
      aparicion: '1970-11-05',
      genero: 'Reggaeton',
      idioma: 'Inglés',
    },
    {
      nombre: 'Sasha Sloan',
      biografia:
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
      img: 'assets/img/img3.jpg',
      aparicion: '1982-11-05',
      genero: 'pop indie',
      idioma: 'Inglés',
    },
    {
      nombre: 'Bad Bunny',
      biografia:
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
      img: 'assets/img/img4.jpg',
      aparicion: '1985-11-05',
      genero: 'Trap',
      idioma: 'Español',
    },
    {
      nombre: 'Asmir Young',
      biografia:
        'Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ',
      img: 'assets/img/img5.jpg',
      aparicion: '1972-11-05',
      genero: 'musica urbana',
      idioma: 'Inglés',
    },
    
    
    
  ];

  getArtists(): Artist[] {
    return this.artists;
  }

  getArtist = (id: any) => this.artists[id];

  private searchTerm: string = '';
  private searchResults: Artist[] = [];

  setSearchTerm(term: string): void {
    this.searchTerm = term;
  }
  getSearchTerm(): string {
    return this.searchTerm;
  }

  // Método para buscar artistas por nombre
  getSearchResults(): Artist[] {
    return this.searchResults;
  }

  // Método para buscar artistas por nombre
  searchArtistsByName(searchTerm: string): void {
    this.searchTerm = searchTerm.toLowerCase();
    this.searchResults = this.artists.filter((artist) =>
      artist.nombre.toLowerCase().includes(this.searchTerm)
    );
  }

  constructor() {
    console.log('Servicio listo !!!');
  }
}

export interface Artist {
  nombre: string;
  biografia: string;
  img: string;
  aparicion: string;
  genero: string;
  idioma: string;
  indice?: number;
}
