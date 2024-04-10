/**
 * Entidad que mapea la informacion obtenida del microservicio categoria
 */
export class Category {
	/**
 	* identificador
 	*/
	public id: number;
	/**
 	* Nombre de la categoria
 	*/
	public name: string;
	/**
	 * Descripcion de la categoria
 	*/
	public descripcion: string;

	constructor(id: number, name: string, descripcion: string) {
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
    }

}