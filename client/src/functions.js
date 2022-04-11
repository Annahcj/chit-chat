
export function hasMatch(title, searchKey) {
  return kmp(title, searchKey);
}

function kmp(str, substr) {
  if (!substr.length) return true;
  let lps = getLPS(substr);
  for (let j = 0, i = 0; j < str.length; j++) {
    if (substr[i] === str[j]) {
      i++;
      if (i === substr.length) return true;
    } else {
      if (i !== 0) i = lps[i - 1];
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
      if (i !== 0) i = lps[i - 1];
    }
  }
  return lps;
}