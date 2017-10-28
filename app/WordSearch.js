fs = require('fs')

class WordSearch {

    constructor(inputFile) {

        this.words_found = [];
        var file = fs.readFileSync(inputFile, "utf8");
        this.words_to_find = file.substr(0, file.indexOf("\n"));
        this.words_to_find = this.words_to_find.replace("\r", "");
        this.words_to_find = this.words_to_find.split(",");

        this.search_space = file.substr(file.indexOf("\n") + 1, file.length);
        this.search_space = this.search_space.replace(/,/g, "");
        this.search_space = this.search_space.split("\r\n");

    }

    getWordsToFind() {
        return this.words_to_find;
    }

    searchSpace() {
        return this.search_space;
    }

    getWordsFound() {
        return this.words_found;
    }

    searchHorizontal() {

        var extend;
        var wordstub = "";
        var length = 0;

        for(var y = 0; y < this.search_space.length; y++) {
            for (var x = 0; x < this.search_space.length; x++) {
                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (wordstub.length > length)
                    length = wordstub.length;

                if (!extend)
                    wordstub = "";
            }
        }

        for (var y = 0; y < this.search_space.length; y++) {
            for (var x = this.search_space.length - 1; x >= 0; x--) {
                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend)
                    wordstub = "";
            }
        }

    }

}

module.exports = WordSearch;