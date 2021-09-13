let expect = require('chai').expect;

// expect(true).to.be.false;// results in error
expect(true).to.be.true; // no error

function titleCase(title){
    // split into words
    let words = title.split(' ');
    let titleCasedWords = words.map((word)=>{
        return word[0].toUpperCase() + word.substring(1);
    });
    // join them into back
    return titleCasedWords.join(' ');
    
}

// Our expectations from titleCase function via chai
expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
