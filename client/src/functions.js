
export function hasMatch(title, searchKey) {
  return kmp(title, searchKey);
}

export function getCommentsCount(posts, comments) {
  let res = {};
  for (let post of posts) {
    res[post.id] = 0;
  }
  for (let comment of comments) {
    res[comment.post_id]++;
  }
  return res;
}

function kmp(str, substr) {
  if (!substr.length) return true;
  let lps = getLPS(substr);
  for (let j = 0, i = 0; j < str.length; j++) {
    if (substr[i] === str[j]) {
      i++;
      if (i === substr.length) return true;
    } else {
      if (i !== 0) {
        i = lps[i - 1];
        j--;
      }
    }
  }
  return false;
}

function getLPS(str) {
  let lps = Array(str.length).fill(0);
  for (let j = 1, i = 0; j < str.length; j++) {
    if (str[i] === str[j]) {
      lps[j] = ++i;
    } else {
      if (i !== 0) {
        i = lps[i - 1];
        j--;
      }
    }
  }
  return lps;
}