export class Worker {

     #name;
     #surname ;
     #days;
     #rate;
     constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    get name(){
        return this.#name;
    }
    get surname(){
        return this.#surname;
    }
    get rate(){
        return this.#rate;
}
    get days(){
        return this.#days;
    }
    getSalary() {
        return this.#rate * this.#days;

    }
    set name(value) {
        this.#name = value;
    }

    set surname(value) {
        this.#surname = value;
    }

    set rate(value) {
        this.#rate = value;
    }

    set days(value) {
        this.#days = value;
    }

}


