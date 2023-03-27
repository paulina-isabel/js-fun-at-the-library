
function shelfBook(book, shelf) {
if (shelf.length < 3) {
  shelf.unshift(book);
}
return shelf
}

function unshelfBook(bookTitle, shelf) {
if (book === bookTitle) {
  shelf.splice(bookTitle)
}
console.log(shelf)
return shelf
}

module.exports = {
  shelfBook,
  unshelfBook,
  // listTitles,
  // searchShelf
};