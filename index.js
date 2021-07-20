const faker = require("faker");

const findFunction = (path,obj) => {
    let fakerFunction = obj;
    path.split(".").forEach((part) => {
        fakerFunction = fakerFunction.hasOwnProperty(part) ? fakerFunction[part] : {}
    })
    return typeof(fakerFunction) === "function" ? fakerFunction : undefined
};

const fakerParser = (custom) => {
    const actions = {
        string: (value) => 
            (findFunction(value,custom) 
                || findFunction(value,faker))(),

        object: (data) => {
            const output = {};
            Object.keys(data).forEach((item) => 
                output[item] = actions[typeof(data[item])](data[item]));
            return output;
        },
        
        function: (value) => value(),

        number: (value) => value 
    };
    
    return (data) => actions[typeof(data)](data);
}

module.exports = fakerParser;