const faker = require("faker");

const findFunction = (path,obj) => {
    let fakerFunction = obj;
    path.split(".").forEach((part) => {
        fakerFunction = fakerFunction.hasOwnProperty(part) ? fakerFunction[part] : {}
    })
    return typeof(fakerFunction) === "function" ? fakerFunction : undefined
};

const fakerParser = (overides = {}) => {
    const actions = {
        string: (value) => 
            (findFunction(value,overides) 
                || findFunction(value,faker))(),

        object: (value) => {
            const output = {};
            Object.keys(value).forEach((item) => 
                output[item] = actions[typeof(value[item])](value[item]));
            return output;
        },
        
        function: (value) => value(),

        number: (value) => value 
    };
    
    return (data) => actions[typeof(data)](data);
}

module.exports = fakerParser;