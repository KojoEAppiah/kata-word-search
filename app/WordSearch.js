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

                if (!extend) {
                    if(x > 0)
                        x -= wordstub.length - 1;
                    wordstub = "";
                }
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

                if (!extend) {
                    if(x < this.search_space.length -1)
                        x += wordstub.length - 1;
                    wordstub = "";
                }
            }
        }

    }

    searchVertical() {

        var extend;
        var wordstub = "";
        var length = 0;

        for (var x = 0; x < this.search_space.length; x++) {
            for (var y = 0; y < this.search_space.length; y++) {
                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend) {
                    if(y > 0)
                        y -= wordstub.length - 1;
                    wordstub = "";
                }
            }
        }


        for (var x = 0; x < this.search_space.length; x++) {
            for (var y = this.search_space.length - 1; y >= 0; y--) {
                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend) {
                    if(y < this.search_space.length -1 )
                        y += wordstub.length - 1;
                    wordstub = "";
                }
            }
        }

    }

    searchDescendingDiag() {

        var x = 0;
        var y = 0;
        var extend = false;
        var wordstub = ""

        //Forwards
        for (var counter = 0; counter < this.search_space.length-1; counter++) {

            x = counter;
            y = 0;
            while (x < this.search_space.length && y < this.search_space.length) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

               // console.log(wordstub);
                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y -= wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y++;
            }
        }

        for (var counter = 0; counter < this.search_space.length - 1; counter++) {

            x = 0;
            y = counter;
            while (x < this.search_space.length && y < this.search_space.length) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y -= wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y++;
            }
        }


        var extend = false;
        var wordstub = ""
        //backwards
        for (var counter = this.search_space.length - 1; counter >= 0; counter--) {

            x = counter;
            y = this.search_space.length - 1;;
            while (x >= 0 && y >= 0) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                // console.log(wordstub);
                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y += wordstub.length - 1;
                        x += wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x--;
                y--;
            }
        }

        for (var counter = 0; counter < this.search_space.length - 1; counter++) {

            x = this.search_space.length - 1;
            y = counter;
            while (x > counter && y >= 0) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y += wordstub.length - 1;
                        x += wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x--;
                y--;
            }
        }
    }

    searchAscendingDiag() {

        var x = 0;
        var y = 0;
        var extend = false;
        var wordstub = ""

        //Forwards
        for (var counter = 0; counter < this.search_space.length - 1; counter++) {

            x = 0;
            y = counter;
            while (x < this.search_space.length -1 && y >= 0  && y < this.search_space.length - 1) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                // console.log(wordstub);
                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y += wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y--;
            }
        }

        for (var counter = 0; counter < this.search_space.length - 1; counter++) {

            x = counter;
            y = this.search_space.length - 1;
            while (x < this.search_space.length && y >= 0) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y += wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y--;
            }
        }

        //backwards
        
        var extend = false;
        var wordstub = ""
        for (var counter = 0; counter < this.search_space.length; counter++) {

            x = this.search_space.length - 1;
            y = counter;

            while (x >= 0 && y < this.search_space.length) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                // console.log(wordstub);
                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y += wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x--;
                y++;
            }
        }

        for (var counter = this.search_space.length - 1; counter >= 0; counter--) {

            x = counter;
            y = 0;
            while (x >= 0 && y < this.search_space.length && y >= 0) {

                extend = false;
                wordstub += this.search_space[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub)
                        this.words_found.push(this.words_to_find[i]);

                }

                if (!extend) {
                    if (y < this.search_space.length - 1) {
                        y -= wordstub.length - 1;
                        x += wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x--;
                y++;
            }
        }
    }
}

module.exports = WordSearch;