class EZArray extends Array {
    get first() {
        return this[0];
    }

    get last() {
        return this[this.length-1];
    }
}

const showEzArray = () => {
    let ezArray = new EZArray();
    let log = ezArray instanceof EZArray
    console.log(log);
    log = ezArray instanceof Array
    console.log(log);
    ezArray.push(1, 2, 3, 4, 5);
    console.log(ezArray);
    console.log(ezArray.first);
    console.log(ezArray.last);
}

showEzArray();

class TypedMap extends Map {
    #keyType
    #valueType

    get keyType() {
        return this.#keyType
    }

    get valueType() {
        return this.#valueType;
    }

    constructor(keyType,valueType,entries) {
        if (entries){
            for (let [k,v] of entries){
                if (typeof k !== keyType || typeof v !== valueType){
                    throw new TypeError('wrong types');
                }
            }
        }
        super(entries);
        this.#keyType = keyType;
        this.#valueType = valueType;
    }

    set(key,value){
        if (this.keyType && typeof key !== this.keyType){
            throw new TypeError('wrong key type')
        }
        if (this.valueType && typeof value !== this.valueType){
            throw new TypeError('wrong value type');
        }
        return super.set(key,value);
    }
}

const showTypedMap = () =>{
    let map = new TypedMap('number','boolean',null)
    console.log(map);
    console.log(map.valueType);
    console.log(map.keyType);
    map.keyType = 'boolean'
    console.log(map.keyType);
    map.set(1,false);
    map.set(2,true);
    console.log(map)
    //map.set('1',false)
    //map.set(1,'one')
}

showTypedMap();


