const faker = require("faker");
const {range,result} = require("@laufire/utils/collection");
const { rndBetween, rndString } = require('@laufire/utils/random');

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)
const randomTask = () =>
    capitalize(faker.hacker.verb() + " " + faker.hacker.noun())

const custom = {
    firstName: () => "nithesh"
}
console.log(randomTask());
console.log(result(custom,"firstName"));