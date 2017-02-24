import $ from 'jquery'

export function queryOmdb (query) {
  var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  var url = "//omdbapi.com/?s=" + term;

  // fetch all movies matching the passed in title as JSON
  return $.getJSON(url).then(function(response) {
    return response["Search"]
  });
}
