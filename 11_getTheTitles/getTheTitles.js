const getTheTitles = function(books) {
const names = [];
for(let book of books){
    names.push(book['title'])
}
return(names)
};

// Do not edit below this line
module.exports = getTheTitles;
