
/// Aquí tiene toda la información sobre la agrupación de todas las tareas
import { ListaItem } from "./lista-item.mode";


export class Lista {

    id: number;
    titulo: string;
    creadaEn: Date;
    terminadaEn: Date;
    terminada: boolean;
    items: ListaItem[];


    constructor( titulo: string ){
        
        this.titulo = titulo;
        this.creadaEn = new Date();
        this.terminada = false;
        this.items = [];

        this.id = new Date().getTime();

    }

}