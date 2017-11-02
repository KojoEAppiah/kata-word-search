WordSearchSolver = require("../app/WordSearchSolver.js");



describe("Acquire Words to Search For", function () {
    it("should parse the first line of the input file", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');
        expect(wordsearch.getWordsToFind()).toMatch(["BONES","KHAN","KIRK","SCOTTY","SPOCK","SULU","UHURA"]);
    });
});

describe("Create a 2 dimensional array of characters to represent the word search", function () {
    it("should print the second row from the top", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');
        expect(wordsearch.getWordSearch()[1]).toMatch("LLSHKZZWZCGJUYG");
    });
});

describe("Search every line horizontally", function () {
    it("should find the words 'SCOTTY' and 'PICARD'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');
        wordsearch.searchHorizontal();
        expect(wordsearch.getWordsFound()).toEqual(["SCOTTY", "KIRK"]);
    });
});

describe("Search every line vertically", function () {
    it("should find the words 'BONES' and 'KHAN'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');
        wordsearch.searchVertical();
        expect(wordsearch.getWordsFound()).toEqual(["BONES", "KHAN"]);
    });
});

describe("Search Every Descending Diagonal Line + Search Backwards", function () {
    it("should find the words 'SPOCK' and 'SULU'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');
        wordsearch.searchDescendingDiag();
        expect(wordsearch.getWordsFound()).toEqual(["SPOCK", "SULU"]);
    });
});

describe("Search Every Ascending Diagonal Line + Search Backwards", function () {
    it("should find the word 'UHURA'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');
        wordsearch.searchAscendingDiag();
        expect(wordsearch.getWordsFound()).toEqual(["UHURA"]);
    });
});

describe("Assigning Letter Coordinates for Each Word in the 1st Word Search", function () {
    it("should return a full list of all words and their letter coordinates'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile.txt');

        wordsearch.searchHorizontal();
        wordsearch.searchVertical();
        wordsearch.searchDescendingDiag();
        wordsearch.searchAscendingDiag();

        expect(wordsearch.getCoordinateList()).toEqual("BONES: (0, 6), (0, 7), (0, 8), (0, 9), (0, 10)\nKHAN: (5, 9), (5, 8), (5, 7), (5, 6)\nKIRK: (4, 7), (3, 7), (2, 7), (1, 7)\nSCOTTY: (0, 5), (1, 5), (2, 5), (3, 5), (4, 5), (5, 5)\nSPOCK: (2, 1), (3, 2), (4, 3), (5, 4), (6, 5)\nSULU: (3, 3), (2, 2), (1, 1), (0, 0)\nUHURA: (4, 0), (3, 1), (2, 2), (1, 3), (0, 4)");
    });
});

describe("Acquire Words to Search For 2nd Word Search", function () {
    it("should parse the first line of the input file", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile2.txt');
        expect(wordsearch.getWordsToFind()).toMatch(["DOWN", "FOOTBALL", "INTERCEPTION", "SAFETY", "TACKLE", "TOUCHBACK", "TOUCHDOWN", "YARD"]);
    });
});

describe("Search every line horizontally in 2nd Word Search", function () {
    it("should find the words 'TOUCHBACK' and 'TACKLE'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile2.txt');
        wordsearch.searchHorizontal();
        expect(wordsearch.getWordsFound()).toEqual(["TOUCHBACK", "TACKLE"]);
    });
});

describe("Search every line vertically", function () {
    it("should find the words 'FOOTBALL' and 'DOWN'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile2.txt');
        wordsearch.searchVertical();
        expect(wordsearch.getWordsFound()).toEqual(["FOOTBALL", "DOWN"]);
    });
});


describe("Search Every Descending Diagonal Line + Search Backwards for the 2nd Word Search", function () {
    it("should find the words 'TOUCHDOWN' and 'DOWN'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile2.txt');
        wordsearch.searchDescendingDiag();
        expect(wordsearch.getWordsFound()).toEqual(["TOUCHDOWN", "DOWN"]);
    });
});

describe("Acquire Words to Search For 3rd Word Search", function () {
    it("should parse the first line of the input file", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile3.txt');
        expect(wordsearch.getWordsToFind()).toMatch(["FOOTBALL", "INTERCEPTION", "PASS", "RUN", "SAFETY", "TACKLE", "TOUCHDOWN", "YARD"]);
    });
});

describe("Search every line horizontally in 3rd Word Search", function () {
    it("should find the word 'FOOTBALL'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile3.txt');
        wordsearch.searchHorizontal();
        expect(wordsearch.getWordsFound()).toEqual(["FOOTBALL", "PASS"]);
    });
});


describe("Assigning Letter Coordinates for Each Word in the 1st Word Search", function () {
    it("should return a full list of all words and their letter coordinates'", function () {
        var wordsearch = new WordSearchSolver('./app/inputFile3.txt');

        wordsearch.searchHorizontal();
        wordsearch.searchVertical();
        wordsearch.searchDescendingDiag();
        wordsearch.searchAscendingDiag();

        expect(wordsearch.getCoordinateList()).toEqual("FOOTBALL: (0, 13), (1, 13), (2, 13), (3, 13), (4, 13), (5, 13), (6, 13), (7, 13)\nINTERCEPTION: (6, 11), (6, 10), (6, 9), (6, 8), (6, 7), (6, 6), (6, 5), (6, 4), (6, 3), (6, 2), (6, 1), (6, 0)\nPASS: (17, 2), (16, 2), (15, 2), (14, 2)\nRUN: (6, 16), (5, 15), (4, 14)\nSAFETY: (10, 2), (11, 3), (12, 4), (13, 5), (14, 6), (15, 7)\nTACKLE: (2, 7), (2, 8), (2, 9), (2, 10), (2, 11), (2, 12)\nTOUCHDOWN: (7, 8), (8, 7), (9, 6), (10, 5), (11, 4), (12, 3), (13, 2), (14, 1), (15, 0)\nYARD: (10, 6), (9, 7), (8, 8), (7, 9)");
    });
});