class SeedInitial{
    
    constructor(){

    }

    get getPassword(){
        return this.password('12345678')
    }

    password(params){
        return `${params}`;
    }

    
}

module.exports = SeedInitial