fs = require('fs')

class WordSearch {

    constructor(inputFile) {
        var file = fs.readFileSync(inputFile, "utf8");
        this.words_to_find = file.substr(0, file.indexOf("\n"));
        this.words_to_find = this.words_to_find.replace("\r", "");
        this.words_to_find = this.words_to_find.split(",");

        this.search_space = file.substr(file.indexOf("\n")+1, file.length);
        this.search_space = this.search_space.replace(/,/g , "");
        this.search_space = this.search_space.split("\r\n");

    }

    words() {
        return this.words_to_find;
    }

    searchSpace() {
        return this.search_space;
    }

}

module.exports = WordSearch;