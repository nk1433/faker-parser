const faker = require("faker");
const {inferType} = require("@laufire/utils/reflection");
const {range,result} = require("@laufire/utils/collection");

const parser = (overides = {}) => {
    const actions = {
        string: (value) => 
            (result(overides,value) 
                || result(faker,value))(),

        object: (value) => {
            const output = {};
            Object.keys(value).forEach((item) => 
                output[item] = parse(value[item]));
            return output;
        },
        
        function: (value) => value(),

        array: ([count,template]) => 
            range(1,count).map(() => parse(template)),

        number: (value) => value,
    };

    const parse = (data) => actions[inferType(data)](data);

    return parse;
};

module.exports = parser;