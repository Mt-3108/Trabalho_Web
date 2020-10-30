let MongoDocument = require('./MongoDocument')

module.exports = class Person extends MongoDocument {
    constructor (data) {
        super(data);
        this.name = data.name;
        this.age = data.age;
        this._id = data._id;
        this.collection = 'person';
    }
    static findOne (_id) {
        
        return super.findOne(_id, 'person').then((result) => {
            return new Person(result);
        });
    }

    static find (query = {}, order = {name: 1}, limit = 5) {
        return super.find(query, order, limit, 'person').then((result) => {
            return result.map((u) => new Person(u))
        });
    }
    
    
};
