WordSearch = require("../app/WordSearch.js");



describe("Acquire Words to Search For", function () {
    it("should parse the first line of the input file", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        expect(wordsearch.words()).toMatch(["BONES","KHAN","KIRK","SCOTTY","SPOCK","SULU","UHURA"]);
    });
});