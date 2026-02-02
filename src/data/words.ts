import type { WordPair } from '../types/game'

export const wordList: WordPair[] = [
  // Animales
  { word: 'Leon', hint: 'Melena', category: 'Animales' },
  { word: 'Delfin', hint: 'Eclocalizacion', category: 'Animales' },
  { word: 'Elefante', hint: 'Colmillo de marfil', category: 'Animales' },
  { word: 'Aguila', hint: 'Calvo americano', category: 'Animales' },
  { word: 'Serpiente', hint: 'Muda de piel', category: 'Animales' },
  { word: 'Canguro', hint: 'Marsupio', category: 'Animales' },
  { word: 'Tiburon', hint: 'Aleta dorsal', category: 'Animales' },
  { word: 'Mariposa', hint: 'Crisalida', category: 'Animales' },
  { word: 'Buho', hint: 'Girar cabeza', category: 'Animales' },
  { word: 'Pulpo', hint: 'Tinta negra', category: 'Animales' },

  // Comida
  { word: 'Pizza', hint: 'Masa fermentada', category: 'Comida' },
  { word: 'Sushi', hint: 'Vinagre de arroz', category: 'Comida' },
  { word: 'Paella', hint: 'Socarrat', category: 'Comida' },
  { word: 'Hamburguesa', hint: 'Carne picada', category: 'Comida' },
  { word: 'Chocolate', hint: 'Cacao tostado', category: 'Comida' },
  { word: 'Helado', hint: 'Lactosa congelada', category: 'Comida' },
  { word: 'Tacos', hint: 'Tortilla doblada', category: 'Comida' },
  { word: 'Croissant', hint: 'Hojaldre con mantequilla', category: 'Comida' },
  { word: 'Cafe', hint: 'Grano etiope', category: 'Comida' },
  { word: 'Tortilla', hint: 'Huevo cuajado', category: 'Comida' },

  // Lugares
  { word: 'Playa', hint: 'Erosion costera', category: 'Lugares' },
  { word: 'Montana', hint: 'Tectonica de placas', category: 'Lugares' },
  { word: 'Hospital', hint: 'Bata blanca', category: 'Lugares' },
  { word: 'Biblioteca', hint: 'Catalogo Dewey', category: 'Lugares' },
  { word: 'Estadio', hint: 'Gradas', category: 'Lugares' },
  { word: 'Aeropuerto', hint: 'Torre de control', category: 'Lugares' },
  { word: 'Casino', hint: 'Crupier', category: 'Lugares' },
  { word: 'Museo', hint: 'Conservador', category: 'Lugares' },
  { word: 'Cementerio', hint: 'Lapida', category: 'Lugares' },
  { word: 'Prision', hint: 'Celda', category: 'Lugares' },

  // Objetos
  { word: 'Telefono', hint: 'Tarjeta SIM', category: 'Objetos' },
  { word: 'Espejo', hint: 'Reflejo invertido', category: 'Objetos' },
  { word: 'Paraguas', hint: 'Varillas', category: 'Objetos' },
  { word: 'Guitarra', hint: 'Trastes', category: 'Objetos' },
  { word: 'Reloj', hint: 'Manecillas', category: 'Objetos' },
  { word: 'Bicicleta', hint: 'Cadena y pinon', category: 'Objetos' },
  { word: 'Camara', hint: 'Obturador', category: 'Objetos' },
  { word: 'Lampara', hint: 'Filamento', category: 'Objetos' },
  { word: 'Tijeras', hint: 'Pivote central', category: 'Objetos' },
  { word: 'Llave', hint: 'Dientes metalicos', category: 'Objetos' },

  // Profesiones
  { word: 'Doctor', hint: 'Juramento hipocratico', category: 'Profesiones' },
  { word: 'Piloto', hint: 'Cabina presurizada', category: 'Profesiones' },
  { word: 'Chef', hint: 'Mise en place', category: 'Profesiones' },
  { word: 'Astronauta', hint: 'Gravedad cero', category: 'Profesiones' },
  { word: 'Detective', hint: 'Lupa', category: 'Profesiones' },
  { word: 'Bombero', hint: 'Manguera', category: 'Profesiones' },
  { word: 'Arquitecto', hint: 'Plano a escala', category: 'Profesiones' },
  { word: 'Abogado', hint: 'Toga negra', category: 'Profesiones' },
  { word: 'Payaso', hint: 'Nariz roja', category: 'Profesiones' },
  { word: 'Espia', hint: 'Identidad falsa', category: 'Profesiones' },

  // Deportes
  { word: 'Futbol', hint: 'Fuera de juego', category: 'Deportes' },
  { word: 'Natacion', hint: 'Brazada', category: 'Deportes' },
  { word: 'Boxeo', hint: 'Guantes acolchados', category: 'Deportes' },
  { word: 'Surf', hint: 'Quilla', category: 'Deportes' },
  { word: 'Ajedrez', hint: 'Jaque', category: 'Deportes' },
  { word: 'Golf', hint: 'Handicap', category: 'Deportes' },
  { word: 'Escalada', hint: 'Mosqueton', category: 'Deportes' },
  { word: 'Tenis', hint: 'Revés', category: 'Deportes' },
  { word: 'Poker', hint: 'Farol', category: 'Deportes' },
  { word: 'Yoga', hint: 'Asana', category: 'Deportes' },

  // Peliculas/Series
  { word: 'Titanic', hint: 'Iceberg', category: 'Peliculas' },
  { word: 'Batman', hint: 'Gotham', category: 'Peliculas' },
  { word: 'Harry Potter', hint: 'Varita de sauco', category: 'Peliculas' },
  { word: 'Star Wars', hint: 'Sable laser', category: 'Peliculas' },
  { word: 'Jurassic Park', hint: 'ADN en ambar', category: 'Peliculas' },
  { word: 'Matrix', hint: 'Codigo verde', category: 'Peliculas' },
  { word: 'Frozen', hint: 'Arendelle', category: 'Peliculas' },
  { word: 'El Padrino', hint: 'Corleone', category: 'Peliculas' },
  { word: 'Forrest Gump', hint: 'Pluma flotando', category: 'Peliculas' },
  { word: 'Spiderman', hint: 'Duende verde', category: 'Peliculas' },

  // Paises
  { word: 'Japon', hint: 'Shinto', category: 'Paises' },
  { word: 'Brasil', hint: 'Favela', category: 'Paises' },
  { word: 'Egipto', hint: 'Papiro', category: 'Paises' },
  { word: 'Australia', hint: 'Aborigen', category: 'Paises' },
  { word: 'Canada', hint: 'Arce', category: 'Paises' },
  { word: 'Italia', hint: 'Coliseo', category: 'Paises' },
  { word: 'Rusia', hint: 'Kremlin', category: 'Paises' },
  { word: 'Mexico', hint: 'Azteca', category: 'Paises' },
  { word: 'Grecia', hint: 'Acropolis', category: 'Paises' },
  { word: 'Islandia', hint: 'Geiser', category: 'Paises' },

  // Conceptos
  { word: 'Amor', hint: 'Oxitocina', category: 'Conceptos' },
  { word: 'Libertad', hint: 'Cadenas rotas', category: 'Conceptos' },
  { word: 'Tiempo', hint: 'Entropia', category: 'Conceptos' },
  { word: 'Sueno', hint: 'REM', category: 'Conceptos' },
  { word: 'Muerte', hint: 'Rigor mortis', category: 'Conceptos' },
  { word: 'Karma', hint: 'Reencarnacion', category: 'Conceptos' },
  { word: 'Destino', hint: 'Oraculo', category: 'Conceptos' },
  { word: 'Venganza', hint: 'Resentimiento', category: 'Conceptos' },
  { word: 'Secreto', hint: 'Confidencial', category: 'Conceptos' },
  { word: 'Nostalgia', hint: 'Sepia', category: 'Conceptos' },

  // Naturaleza
  { word: 'Volcan', hint: 'Magma', category: 'Naturaleza' },
  { word: 'Arcoiris', hint: 'Refraccion', category: 'Naturaleza' },
  { word: 'Tornado', hint: 'Vortice', category: 'Naturaleza' },
  { word: 'Cascada', hint: 'Caudal vertical', category: 'Naturaleza' },
  { word: 'Desierto', hint: 'Oasis', category: 'Naturaleza' },
  { word: 'Selva', hint: 'Dosel', category: 'Naturaleza' },
  { word: 'Luna', hint: 'Marea', category: 'Naturaleza' },
  { word: 'Sol', hint: 'Fusion nuclear', category: 'Naturaleza' },
  { word: 'Terremoto', hint: 'Escala Richter', category: 'Naturaleza' },
  { word: 'Rayo', hint: 'Descarga electrica', category: 'Naturaleza' },

  // Extras mas dificiles
  { word: 'Vampiro', hint: 'Ajo', category: 'Fantasia' },
  { word: 'Pirata', hint: 'Parche', category: 'Fantasia' },
  { word: 'Robot', hint: 'Circuito', category: 'Fantasia' },
  { word: 'Fantasma', hint: 'Ectoplasma', category: 'Fantasia' },
  { word: 'Dinosaurio', hint: 'Fosil', category: 'Fantasia' },
  { word: 'Sirena', hint: 'Escamas', category: 'Fantasia' },
  { word: 'Dragon', hint: 'Escupir', category: 'Fantasia' },
  { word: 'Bruja', hint: 'Caldero', category: 'Fantasia' },
  { word: 'Zombie', hint: 'Cerebro', category: 'Fantasia' },
  { word: 'Unicornio', hint: 'Cuerno espiral', category: 'Fantasia' },
]

export function getRandomWord(): WordPair {
  const randomIndex = Math.floor(Math.random() * wordList.length)
  return wordList[randomIndex]
}
