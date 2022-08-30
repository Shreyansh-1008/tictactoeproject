const chai = require('chai');
const expect = chai.expect;
const play = require("../js/script");
const enableButtons= require("../js/script");

describe("Change Theme", function () {

    it("should be a Object", function () {
        expect(typeof (play)).equal("object");
    });
    it("should be a Object", function () {
        expect(typeof (enableButtons)).equal("object");
    });
});