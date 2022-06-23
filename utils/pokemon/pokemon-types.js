const { transpose, dotMultiply } = require('mathjs');

class PokemonTypes {
    constructor(tables) {
        this.types = tables.types;
        this.values = tables.values;
        this.type1 = null;
        this.type2 = null;
    }

    setTypesById(type1, type2 = null) {
        this.type1 = type1;
        this.type2 = type2
    }

    setTypesByName(type1, type2 = null) {
        this.type1 = this.types.indexOf(type1);
        if (type2) this.type2 = this.types.indexOf(type2);
    }

    getNameType(id) {
        const name = this.types[id];
        if (!name) return 'nada más'
        return name;
    }

    getIdType(name) {
        return this.types.indexOf(name);
    }

    result(weakness = false) {
        let values = this.values;
        if (weakness) values = transpose(this.values);
        if (this.type1 === this.type2) this.type2 = null;
        const evaluate = (this.type2) ? dotMultiply(values[this.type1], values[this.type2]) : values[this.type1];
        const result = {};
        evaluate.forEach((value, index) => {
            if (!result[value]) result[value] = []
            result[value].push(this.getNameType(index));
        })
        return result;
    }
}

module.exports = { PokemonTypes };