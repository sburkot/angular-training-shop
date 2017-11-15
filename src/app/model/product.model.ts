/* Product Model */
  export enum Category{
    Phone = "Smart Phone",
    TabletPC = "Tablet PC",
    NoteBook = "Note Book"
  }

  export class Product {
    constructor(
      public id: number,
      public name?: string,      
      public category?: Category,
      public description?: string,      
      public isAvailable?: boolean,
      public price?: number,
      public equivalents?: Array<string>
    ) {
      this.id = id || null;
      this.name = name || "Product";
      this.description = description || "Description";
      this.isAvailable = isAvailable || false;
      this.equivalents = equivalents || null;
    }

    public HasEquivalents(): boolean {
      return this.equivalents != null && this.equivalents.length > 0;
    }
  }
  