


export class Movie {
    public _id: string;
    public imgUrl: string;
    public title: string;
    public year: number;
    public price: number;
    public shortDescription: string;
    public fullDescription : string;
    public director : string;
    public reviews : [{
        name: string,
        rating: {
            type: number,
            min: 0,
            max: 5
        },
        text: string
    }];

    constructor() {
        
    }
}

