/* 
  author: familyboat

  util function
*/

const mount = (dom, str) => {
  document.querySelector(dom).innerHTML = str;
};

const isArray = Array.isArray;

const filter = (arr, key, value) => arr.filter((item) => item[key] == value);

const group = (arr, key) => {
  let result = {};
  for (let item of arr) {
    if (Object.keys(result).includes(item[key])) {
      result[item[key]].push(item);
    } else {
      result[item[key]] = [item];
    }
  }
  return result;
};

export {mount, isArray, filter, group};