export class Product {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  img!: string;

  constructor(
    id: number,
    name: string,
    description: string = '',
    price: number = 0,
    img: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png'
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img;
  }
}
