const faker = require("faker");

const actions = {
    string: (data,key) => {
        let fakerFunction = faker;
        data[key].split(".").forEach((item) => {
            fakerFunction = fakerFunction[item]
        })
        data[key] = fakerFunction();
    },

    object: (data,key) => 
        fakerParser(data[key]),

    function: (data,item) => 
        data[item] = data[item]()

}

const keywords = Object.keys(actions)

const fakerParser = (data) => 
    Object.keys(data).forEach((item) => actions[typeof(data[item])](data,item))

module.exports = fakerParser