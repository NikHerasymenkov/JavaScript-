export class MyString {
    #str='abcde' ;

    get reverse() {
        return this.#str.split("").reverse().join("");
    }

    get ucFirst() {
        return this.#str[0].toUpperCase() + this.#str.substr(1)
    }

    get ucWorld() {
        this.#str='abcdeasd ads asd'
        return this.#str.replace(/(^|\s)\S/g, function ($1) {
            return $1.toUpperCase();
        });
    }

}