WordSearch = require("../app/WordSearch.js");



describe("Acquire Words to Search For", function () {
    it("should parse the first line of the input file", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        expect(wordsearch.words()).toMatch(["BONES","KHAN","KIRK","SCOTTY","SPOCK","SULU","UHURA"]);
    });
});

describe("Create a 2 dimensional array of characters to represent the word search", function () {
    it("should print the second row from the top", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        expect(wordsearch.searchSpace()[1]).toMatch("LLSHKZZWZCGJUYG");
    });
});