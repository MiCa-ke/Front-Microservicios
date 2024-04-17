/**
 * Entidad que mapea la informacion obtenida del microservicio product
 */
export class Product {
    /**
 	* identificador
 	*/
	public id?: number;
	/**
 	* Nombre del producto
 	*/
	public name: string;
	/**
	 * Descripcion del producto
 	*/
	 public descripcion: string ;
    /**
	 * Descripcion precio
 	*/ 
    public precio: number;
    /**
	 * Categoria a la que pertenece el producto
 	*/
    public categoryId: number;

	public categoryName: string;

	constructor(name: string, descripcion: string, precio: number, categoryId: number, categoryName: string, id?: number, ) {
        this.id = id;
        this.name = name;
		this.descripcion = descripcion; 
        this.precio = precio;
        this.categoryId = categoryId;
		this.categoryName = categoryName;
    }

}