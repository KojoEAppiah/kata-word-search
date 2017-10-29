WordSearch = require("../app/WordSearch.js");



describe("Acquire Words to Search For", function () {
    it("should parse the first line of the input file", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        expect(wordsearch.getWordsToFind()).toMatch(["BONES","KHAN","KIRK","SCOTTY","SPOCK","SULU","UHURA"]);
    });
});

describe("Create a 2 dimensional array of characters to represent the word search", function () {
    it("should print the second row from the top", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        expect(wordsearch.searchSpace()[1]).toMatch("LLSHKZZWZCGJUYG");
    });
});

describe("Search every line horizontally", function () {
    it("should find the words 'SCOTTY' and 'PICARD'", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        wordsearch.searchHorizontal();
        expect(wordsearch.getWordsFound()).toEqual(["SCOTTY", "KIRK"]);
    });
});

describe("Search every line vertically", function () {
    it("should find the word 'BONES' and 'KHAN'", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        wordsearch.searchVertical();
        expect(wordsearch.getWordsFound()).toEqual(["BONES", "KHAN"]);
    });
});

describe("Search Every Descending Diagonal Line + Search Backwards", function () {
    it("should find the words 'SPOCK' and 'SULU'", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        wordsearch.searchDescendingDiag();
        expect(wordsearch.getWordsFound()).toEqual(["SPOCK", "SULU"]);
    });
});

describe("Search Every Ascending Diagonal Line + Search Backwards", function () {
    it("should find the word 'UHURA'", function () {
        var wordsearch = new WordSearch('./app/inputFile.txt');
        wordsearch.searchAscendingDiag();
        expect(wordsearch.getWordsFound()).toEqual(["UHURA"]);
    });
});