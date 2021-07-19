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
        string: (data,key,output) => 
            output[key] = (findFunction(data[key],custom) 
                || findFunction(data[key],faker))(),

        object: (data,key,output) => 
            output[key] = parse(data[key]),

        function: (data,key,output) => 
            output[key] = data[key](),

    };
    const parse = (data) => {
        const output = {};
        Object.keys(data).forEach((item) => actions[typeof(data[item])](data,item,output));
        return output;
    };
    return parse;
}

module.exports = fakerParser;