const faker = require("faker");

const actions = {
    string: (data,key,output) => {
        let fakerFunction = faker;
        data[key].split(".").forEach((item) => {
            fakerFunction = fakerFunction[item]
        })
        output[key] = fakerFunction();
    },

    object: (data,key,output) => 
       output[key] = fakerParser(data[key]),

    function: (data,item,output) => 
        output[item] = data[item]()

}

const keywords = Object.keys(actions)

const fakerParser = (data) => {
    const output = {};
    Object.keys(data).forEach((item) => actions[typeof(data[item])](data,item,output));
    return output;
}

module.exports = fakerParser;