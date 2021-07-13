// It is basically a POJO class 
// In simple words a modal class(here recipe) defines how an object(recipe) should look like 
export class Recipe{

    // Attr declarations
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, description: string, imagePath: string){
        this.name = name;
        this.description = description
        this.imagePath = imagePath
    }
}