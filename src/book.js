function createTitle(newTitle) {
var bookIdea = "The " + newTitle
return bookIdea
}

function buildMainCharacter(person, num, they) {
  var newCharacter = {
    name: person,
    age: num,
    pronouns: they
  }
  return newCharacter;
}

function saveReview(review, reviews) {
// if (!reviews.includes(review)) {
//   reviews.push(review)
// }
/// the method above ^ does the same as the one below v
if (reviews.includes(review) === false) {
  reviews.push(review)
}
}

function calculatePageCount(bookTitle) {
  var bookPageCount = bookTitle.length * 20
  return bookPageCount
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
  return book
}

function editBook(book) {
book.pageCount = book.pageCount * 0.75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
};