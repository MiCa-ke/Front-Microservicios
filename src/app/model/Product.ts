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
    public category_id: number;

	constructor(name: string, descripcion: string, precio: number, category_id: number, id?: number, ) {
        this.id = id;
        this.name = name;
		this.descripcion = descripcion; 
        this.precio = precio;
        this.category_id = category_id;
    }

}