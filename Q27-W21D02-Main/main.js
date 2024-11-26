/* getQueryString */

/*  
have a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.
If the url does not contain a query string, return undefined
*/

const getQueryString = (url) => {
  const queryString = url.split("?")[1];
  if (!queryString) return undefined;
  const result = [];

  const pairs = queryString.split("&").map((pair) => {
    const [key, value] = pair.split("=");
    result.push([key, value]);
  });
  console.log(result);

  return pairs;
};

getQueryString("http://example.com?a=lol"); //=> [ [ "a", "lol" ] ]
getQueryString("http://example.com?a=lol&b=88"); //=> [ [ "a", "lol" ], [ "b", "88" ] ]
getQueryString("http://example.com?msg=lol%20world"); //=> [ [ "msg", "lol world" ] ]
getQueryString("http://example.com"); //=> undefined

/* 
Examples:
getQueryString("http://example.com?a=lol"); //=> [ [ "a", "lol" ] ]
getQueryString("http://example.com?a=lol&b=88"); //=> [ [ "a", "lol" ], [ "b", "88" ] ]
getQueryString("http://example.com?msg=lol%20world"); //=> [ [ "msg", "lol world" ] ]
getQueryString("http://example.com"); //=> undefined
*/
module.exports = { getQueryString };
