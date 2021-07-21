const fakerParser = require("./index");
const {rndBetween} = require("@laufire/utils/random");
const {range,result} = require("@laufire/utils/collection");

const custom = {
    firstName: () => "nithesh",
    helpers: {
        positive: () => 1,
        negative: () => -1
    }
};

const parse = fakerParser(custom);

console.log(parse({
    name: "firstName",
    email: "internet/email",
    details: {
        card: "helpers/createCard",
        demo: {
            age: "random/number",
            test: {
                name: "name/findName",
            },
        },
    },
    age: "helpers/positive",
    gender: () => "male",
    children: [
        1,
        "firstName"
    ],
}));

console.log(parse("firstName"));
console.log(parse(custom.firstName));

console.log(parse(
    [
        () => 5,
        {
            name: "name/firstName"
        }
    ]
));

console.log(parse({
    name: "name/firstName",
    cost: () => rndBetween(0,10),
    tasks: [
        () => rndBetween(0,5),
        {
            name: "name/firstName",
            tasks: [
                () => rndBetween(0,2),
                {
                    age: () => rndBetween(1,99)
                }
            ]
        }
    ]
}));








