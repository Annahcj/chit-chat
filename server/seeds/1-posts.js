exports.seed = function (knex) {
  return knex('posts').insert([
    { id: 1, created_at: new Date('2022-04-10'), author: 'Alice', title: 'Movie Suggestions?', content: 'Does anyone have any good movie recommendations? Comment below and I will pick one to watch later! thanks everyone!' },
    { id: 2, created_at: new Date('2022-04-11'), author: 'Bob', title: 'Binary Search', content: `Binary search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. We used binary search in the guessing game in the introductory tutorial.
    One of the most common ways to use binary search is to find an item in an array. For example, the Tycho-2 star catalog contains information about the brightest 2,539,913 stars in our galaxy. Suppose that you want to search the catalog for a particular star, based on the star's name. If the program examined every star in the star catalog in order starting with the first, an algorithm called linear search, the computer might have to examine all 2,539,913 stars to find the star you were looking for, in the worst case. If the catalog were sorted alphabetically by star names, binary search would not have to examine more than 22 stars, even in the worst case.` },
  ])
}
