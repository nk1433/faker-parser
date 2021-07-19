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
        string: (data,key) => 
            (findFunction(data[key],custom) 
                || findFunction(data[key],faker))(),

        object: (data,key) => 
            parse(data[key]),

        function: (data,key) => 
            data[key](),

    };
    const parse = (data) => {
        const output = {};
        console.log(Object.keys(data));
        Object.keys(data).forEach((item) => 
            output[item] = actions[typeof(data[item])](data,item));
        return output;
    };
    return parse;
}

module.exports = fakerParser;