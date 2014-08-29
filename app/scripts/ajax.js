//Script used to populate articles
console.log('ajax is indeed here');

function upBlog(url, $el) {
  $.ajax({
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    success: function(data) {
      $el.html('');
      var preEntries = data.responseData.feed.entries;
      window.entries = [];
      for (var g = 0; g < 3; g++) {
        entries.push(preEntries[g]);
      }
      console.log(entries);
      //create article template
      var myTmpl = _.template(articleTmpl, data);
      $el.html(myTmpl);

     }
 });
};
