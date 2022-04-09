exports.seed = function (knex) {
  return knex('comments').insert([
    { id: 1, post_id: 1, author: 'Patty', comment: 'Star Wars!' },
    { id: 2, post_id: 1, author: 'Peg', comment: 'Jurassic Park!' },
    { id: 3, post_id: 1, author: 'Peg', comment: 'no watch Dune!' },
    { id: 4, post_id: 1, author: 'Bob', comment: 'watch Parasite' },
    { id: 5, post_id: 1, author: 'Patty', comment: 'Titanic' },
    { id: 6, post_id: 1, author: 'Patty', comment: 'or Minari' },
    { id: 7, post_id: 1, author: 'Patty', comment: 'Forrest Gump!!!' },
    { id: 8, post_id: 2, author: 'Alice', comment: 'Binary search is awesome ;)' },
    { id: 9, post_id: 2, author: 'Alice', comment: 'Some more info... In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.' },
    { id: 10, post_id: 2, author: 'Alice', comment: 'Binary search works on sorted arrays. Binary search begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned. If the target value is less than the element, the search continues in the lower half of the array. If the target value is greater than the element, the search continues in the upper half of the array. By doing this, the algorithm eliminates the half in which the target value cannot lie in each iteration.' },
    { id: 11, post_id: 2, author: 'Bob', comment: 'Binary chop! I\'ve never heard it being called binary chop... That\'s so funny' },
    { id: 12, post_id: 2, author: 'Alice', comment: 'I know right! It\'s not from me, I just copy and pasted from wikipedia...' },
    { id: 13, post_id: 2, author: 'Alice', comment: 'I\'ve run out of comment ideas now' },
    { id: 14, post_id: 2, author: 'Alice', comment: 'I guess I\'ll just put random stuff...' },
  ])
}
