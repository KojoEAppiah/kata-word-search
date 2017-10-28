fs = require('fs')

class WordSearch {

    constructor(inputFile) {
        var file = fs.readFileSync(inputFile, "utf8");
        this.words_to_find = file.substr(0, file.indexOf("\n"));
        this.words_to_find = this.words_to_find.replace("\r", "");
        this.words_to_find = this.words_to_find.split(",");
    }

    words() {
        return this.words_to_find;
    }

}

module.exports = WordSearch;