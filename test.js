const fakerParser = require("./index");

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







