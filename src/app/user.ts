import { Movie } from "./movie";

export class User {
    public moviesCollection: Array<Movie> = Array<Movie>();
    public budget: number = 1000;
    constructor() {    
    }
}