var readBooks = require('./callback.js')
 
var books = [
    {name: 'Konspirasi COVID-19', timeSpent: 3000}, 
    {name: 'Konspirasi Flat Earth', timeSpent: 2000}, 
    {name: 'Konsipirasi ayam atau telur', timeSpent: 4000},
    {name: 'Buku death Note', timeSpent: 1000}
]

function baca(time, books, i) {
    if (i < books.length) {
        readBooks(time, books[i], function(sisa) {
            if (sisa > 0) {
                i += 1;
                baca(sisa, books, i);
            }
        } )
    }
}
baca(10000, books,0)



