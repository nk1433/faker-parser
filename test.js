const fakerParser = require("./index");


let data = {
    name: "name.findName",
    email: "internet.email",
    details: {
        card: "helpers.createCard",
        demo: {
            age: "random.number",
            test: {
                name: "name.findName",
            },
        },
    },
    age: "random.number",
    gender: () => "male",
};




console.log(fakerParser(data))