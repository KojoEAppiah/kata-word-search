fs = require('fs')

class WordSearchSolver {

    constructor(inputFile) {

        this.words_found = [];
        this.word_coordinates = {};
        var file = fs.readFileSync(inputFile, "utf8");
        this.words_to_find = file.substr(0, file.indexOf("\n"));
        this.words_to_find = this.words_to_find.replace("\r", "");
        this.words_to_find = this.words_to_find.split(",");


        this.word_search = file.substr(file.indexOf("\n") + 1, file.length);
        this.word_search = this.word_search.replace("\r", "");
        this.word_search = this.word_search.replace(/[, ]/g, "");
        this.word_search = this.word_search.split("\n");
        

    }

    getCoordinates() {
        return this.word_coordinates;
    }

    getWordsToFind() {
        return this.words_to_find;
    }

    getWordSearch() {
        return this.word_search;
    }

    getWordsFound() {
        return this.words_found;
    }

    getCoordinateList() {

        var sorted = {}
        var names = []

        for (var key in this.word_coordinates) {
                names.push(key);
        }

        names.sort();
        var output = ""
        for (var i = 0; i < names.length; i++) {
            output += names[i] + ": ";
            for (var coord = 0; coord < this.word_coordinates[names[i]].length; coord++) {
                output += "(" + this.word_coordinates[names[i]][coord][0] + ", " + this.word_coordinates[names[i]][coord][1] + ")";
                if (coord < this.word_coordinates[names[i]].length - 1)
                    output += ", ";
            }
            if(i < names.length - 1)
                output += "\n";
        }

        return output;
    }

    searchHorizontal() {
        
        var extend;
        var wordstub = "";
        var length = 0;

        for(var y = 0; y < this.word_search.length; y++) {
            for (var x = 0; x < this.word_search.length; x++) {
                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx - offset;
                            letter[1] = y;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }
                }

                if (x == this.word_search.length - 1) { //reached end of line
                    wordstub = "";
                }

                if (!extend) {
                    if(x > 0)
                        x -= wordstub.length - 1;
                    wordstub = "";
                }
            }
        }

        //Backwards
        for (var y = 0; y < this.word_search.length; y++) {
            for (var x = this.word_search.length - 1; x >= 0; x--) {
                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx + offset;
                            letter[1] = y;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (x == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if(x < this.word_search.length -1)
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

        for (var x = 0; x < this.word_search.length; x++) {
            for (var y = 0; y < this.word_search.length; y++) {
                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = x;
                            letter[1] = wy - offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (y == this.word_search.length - 1) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if(y > 0)
                        y -= wordstub.length - 1;
                    wordstub = "";
                }
            }
        }

        //Backwards

        for (var x = 0; x < this.word_search.length; x++) {
            for (var y = this.word_search.length - 1; y >= 0; y--) {
                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = x;
                            letter[1] = wy + offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (y == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if(y < this.word_search.length -1 )
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
        for (var counter = 0; counter < this.word_search.length-1; counter++) {

            x = counter;
            y = 0;
            while (x < this.word_search.length && y < this.word_search.length) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length - 1; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx - offset;
                            letter[1] = wy - offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (x == this.word_search.length - 1) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
                        y -= wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y++;
            }
        }

        for (var counter = 0; counter < this.word_search.length - 1; counter++) {

            x = 0;
            y = counter;
            while (x < this.word_search.length && y < this.word_search.length) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx - offset;
                            letter[1] = wy - offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (y == this.word_search.length - 1) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
                        y -= wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y++;
            }
        }

        //backwards
        var extend = false;
        var wordstub = ""
        for (var counter = this.word_search.length - 1; counter >= 0; counter--) {

            x = counter;
            y = this.word_search.length - 1;;
            while (x >= 0 && y >= 0) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx + offset;
                            letter[1] = wy + offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (x == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
                        y += wordstub.length - 1;
                        x += wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x--;
                y--;
            }
        }

        for (var counter = 0; counter < this.word_search.length - 1; counter++) {

            x = this.word_search.length - 1;
            y = counter;
            while (x > counter && y >= 0) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx + offset;
                            letter[1] = wy + offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (y == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
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
        for (var counter = 0; counter < this.word_search.length - 1; counter++) {

            x = 0;
            y = counter;
            while (x < this.word_search.length -1 && y >= 0  && y < this.word_search.length - 1) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx - offset;
                            letter[1] = wy + offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (y == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
                        y += wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x++;
                y--;
            }
        }

        for (var counter = 0; counter < this.word_search.length - 1; counter++) {

            x = counter;
            y = this.word_search.length - 1;
            while (x < this.word_search.length && y >= 0) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx - offset;
                            letter[1] = wy + offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (x == this.word_search.length - 1) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
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
        for (var counter = 0; counter < this.word_search.length; counter++) {

            x = this.word_search.length - 1;
            y = counter;

            while (x >= 0 && y < this.word_search.length) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx + offset;
                            letter[1] = wy - offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (x == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
                        y += wordstub.length - 1;
                        x -= wordstub.length - 1;
                    }
                    wordstub = "";
                }
                x--;
                y++;
            }
        }

        for (var counter = this.word_search.length - 1; counter >= 0; counter--) {

            x = counter;
            y = 0;
            while (x >= 0 && y < this.word_search.length && y >= 0) {

                extend = false;
                wordstub += this.word_search[y][x];
                for (var i = 0; i < this.words_to_find.length; i++) {
                    if (this.words_to_find[i].substr(0, wordstub.length) === wordstub) {
                        extend = true;
                    }
                    if (this.words_to_find[i] === wordstub) {
                        this.words_found.push(this.words_to_find[i]);
                        var wx = x;
                        var wy = y;
                        var temp_word_coordinates = []
                        for (var offset = wordstub.length - 1; offset >= 0; offset--) { //get the coordinates
                            var letter = [];
                            letter[0] = wx + offset;
                            letter[1] = wy - offset;
                            temp_word_coordinates.push(letter);
                        }

                        this.word_coordinates[wordstub] = temp_word_coordinates;
                    }

                }

                if (x == 0) { //reached end of line
                    wordstub = ""
                }

                if (!extend) {
                    if (y < this.word_search.length - 1) {
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

module.exports = WordSearchSolver;