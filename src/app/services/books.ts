export interface Book {
  name: string;
  pages: number;
  caps: number;
  author: string | Array<string>;
  info: string;
  img: string;
  id: number;
}

export const books: Array<Book> = [
  {
    id: 1,
    name: 'Magisterium - o Desafio de Ferro',
    author: ['Holly Black', 'Cassandra Clare'],
    caps: 16,
    img: '../../assets/magisterium1.jpg',
    pages: 337,
    info: ' A maioria dos garotos faria qualquer coisa para passar no Desafio de Ferro. Callum Hunt não é um deles. Ele quer falhar. Se for aprovado no Desafio de Ferro e admitido no Magisterium, ele tem certeza de que isso só irá lhe trazer coisas ruins. Assim, ele se esforça ao máximo para fazer o seu pior... mas falha em seu plano de falhar. Agora, o Magisterium espera por ele, um lugar ao mesmo tempo incrível e sinistro, com laços sombrios que unem o passado de Call e um caminho tortuoso até o seu futuro. Magisterium O Desafio de Fero nasceu da extraordinária imaginação das autoras best-sellers Holly Black e Cassandra Clare. Um mergulho alucinante em um universo mágico e inexplorado.',
  },
];
