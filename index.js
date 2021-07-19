const faker = require("faker");

const findFunction = (attrs,obj) => {
    let fakerFunction = obj;
    attrs.forEach((item) => {
        fakerFunction = fakerFunction.hasOwnProperty(item) ? fakerFunction[item] : {}
    })
    return fakerFunction;
};

const fakerParser = (custom) => {
    const actions = {
        string: (data,key,output) => {
            const custfunc = findFunction(data[key].split("."),custom);
            const fakerfunc = findFunction(data[key].split("."),faker);
            let func = typeof(custfunc) === "function" ? custfunc : fakerfunc
            output[key] = func();
        },

        object: (data,key,output) => 
            output[key] = parse(data[key]),

        function: (data,item,output) => 
            output[item] = data[item](),

    };
    const parse = (data) => {
        const output = {};
        Object.keys(data).forEach((item) => actions[typeof(data[item])](data,item,output));
        return output;
    };
    return parse;
}

module.exports = fakerParser;