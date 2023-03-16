let person  = {
   

    get fname() {
        return this.name
    },

    set fname (value) {
        this.name = value
    }
}


console.log(person.fname = 'nanda' ?? person.fname);