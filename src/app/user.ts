import { Movie } from "./movie";

export class User {
    public moviesCollection: Array<Movie> = Array<Movie>();
    public budget: number = 12;
    constructor() {    
    }
}