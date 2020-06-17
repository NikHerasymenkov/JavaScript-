import {User} from "./User";
export class Student extends User{

    constructor(name,surname,year) {
        super(name,surname);
        this.year=year;
    }
    getCourse(){
        let date =new Date();
        return date.getFullYear()-this.year;
    }
}