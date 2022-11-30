export class Book {
  constructor(
    public id: number,
    public category: string,
    public title: string,
    public cost: string,
    public authors?: Author[],
    public year?: number,
    public description?: string
  ) {}
}

export class Author {
  constructor(
    public firstName: string,
    public lastName: string
  ){}
}