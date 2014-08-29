console.log('var is here');
//Video data
var vidArr = [
{name: 'Lance', spot: 0, video: '<iframe style=\'margin: 50px auto auto 100px\' width=\'473\' height=\'355\' src=\'//www.youtube.com/embed/zIDtyrIbo-4\' frameborder=\'0\' allowfullscreen></iframe>', smallVideo: '<iframe style=\'margin: 50px auto auto 100px\' width=\'320\' height=\'auto\' src=\'//www.youtube.com/embed/zIDtyrIbo-4\' frameborder=\'0\' allowfullscreen></iframe>'},
{name: 'Rodney', spot: 1, video: '<iframe style=\'margin: 60px auto auto 17px\' width=\'630\' height=\'355\' src=\'//www.youtube.com/embed/oJg2_dUHd84\' frameborder=\'0\' allowfullscreen></iframe>', smallVideo: '<iframe style=\'margin: 60px auto auto 17px\' width=\'320\' height=\'auto\' src=\'//www.youtube.com/embed/oJg2_dUHd84\' frameborder=\'0\' allowfullscreen></iframe>'},
{name: 'Steve', spot: 2, video: '<iframe style=\'margin:50px auto auto 90px\' width=\'473\' height=\'355\' src=\'//www.youtube.com/embed/p8AK7rQr8AU\' frameborder=\'0\' allowfullscreen></iframe>', smallVideo: '<iframe style=\'margin:50px auto auto 90px\' width=\'320\' height=\'auto\' src=\'//www.youtube.com/embed/p8AK7rQr8AU\' frameborder=\'0\' allowfullscreen></iframe>'},
{name: 'Tommy', spot: 3, video: '<iframe style=\'margin: 55px auto auto 15px\' width=\'631\' height=\'355\' src=\'//www.youtube.com/embed/c16yTdi1zFQ\' frameborder=\'0\' allowfullscreen></iframe>', smallVideo: '<iframe style=\'margin: 55px auto auto 15px\' width=\'320\' height=\'auto\' src=\'//www.youtube.com/embed/c16yTdi1zFQ\' frameborder=\'0\' allowfullscreen></iframe>'},
];
//video function to print frames (see events)
var videoBoard = function(p) {
  var videoTmpl = '<div id=\'videoSeciton\'>';
    for (var j = 0; j < vidArr.length; j++) {
      if (j != p) {
        videoTmpl += '<a style=\'background\-color: #E82C0C\' href=\'#\' id=\'' + vidArr[j].name + '\' class=\'name button expand\' data\-spot=\'' + vidArr[j].spot + '\'> Watch ' + vidArr[j].name + '</a>';
      }
    }
  videoTmpl += '<a id=\'close\' href=\'#\' class=\'button\' role=\'button\'>CLOSE</a><img style=\'width: 200px\'id=\'whoa\' src=\'../images/video_logo.png\' title=\'Powell Peralta\'></div>';
  $('.skillsRight').html(videoTmpl);
  $('.skillsRight').addClass('black');
};

var go = function ($target) {
  goTmpl = '';
  for (var i = 1; i < 11; i++) {
      var g = i+1;
      var b = i-1;
      if (i === 1) {
        goTmpl = ['<a href=\'#\' data-reveal-id=\'myModal' + i + '\' title=\'Click to See More\' style=\'background\-image: url(../images/skateboard_' + i + '.jpg)\' id=\'board' + i + '\' class=\'large-1 columns boards toolio\'></a>',
        '<div id=\'myModal' + i + '\' class=\'reveal-modal\' data-reveal style=\'text\-align: center\'>',
          '<h2>Plan B Ryan Sheckler</h2>',
          '<h2>Jersey Skateboard Deck</h2>',
          '<h4>8\"x32\"</h4>',
          '<img src=\'../images/skateboard_' + i + '.jpg\' style=\'width:100px\'>',
          '<a style=\'color:grey; font-size:1.4em; margin-left:10px\' href=\'#\' data-reveal-id=\'myModal' + g + '\' class=\'moveRight\'>+1</a>',
          '<p class=\'lead\'>C\'mon, <br/>You know you want it.</p>',
          '<a class=\'close-reveal-modal\'>&#215;</a>',
        '</div>'
        ].join('');
        $target.append(goTmpl);
      }
      else if (i < 10) {
        goTmpl = ['<a href=\'#\' data-reveal-id=\'myModal' + i + '\' title=\'Click to See More\' style=\'background\-image: url(../images/skateboard_' + i + '.jpg)\' id=\'board' + i + '\' class=\'large-1 columns boards toolio\'></a>',
        '<div id=\'myModal' + i + '\' class=\'reveal-modal\' data-reveal style=\'text\-align: center\'>',
          '<h2>Plan B Ryan Sheckler</h2>',
          '<h2>Jersey Skateboard Deck</h2>',
          '<h4>8\"x32\"</h4>',
          '<a style=\'color:grey; font-size:1.4em; margin-right:10px\' href=\'#\' data-reveal-id=\'myModal' + b + '\' class=\'moveLeft\'>- 1</a>',
          '<img src=\'../images/skateboard_' + i + '.jpg\' style=\'width:12%; min\-width:50px;\'>',
          '<a style=\'color:grey; font-size:1.4em; margin-left:10px\' href=\'#\' data-reveal-id=\'myModal' + g + '\' class=\'moveRight\'>+1</a>',
          '<p class=\'lead\'>C\'mon, <br/>You know you want it.</p>',
          '<a class=\'close-reveal-modal\'>&#215;</a>',
        '</div>'
        ].join('');
        $target.append(goTmpl);
      }
      else {
        goTmpl = ['<a href=\'#\' data-reveal-id=\'myModal' + i + '\' title=\'Click to See More\' style=\'background\-image: url(../images/skateboard_' + i + '.jpg)\' id=\'board' + i + '\' class=\'large-1 columns boards toolio\'></a>',
        '<div id=\'myModal' + i + '\' class=\'reveal-modal\' data-reveal style=\'text\-align: center\'>',
          '<h2>Plan B Ryan Sheckler</h2>',
          '<h2>Jersey Skateboard Deck</h2>',
          '<h4>8\"x32\"</h4>',
          '<a style=\'color:grey; font-size:1.4em; margin-right:10px\' href=\'#\' data-reveal-id=\'myModal' + b + '\' class=\'moveLeft\'>- 1</a>',
          '<img src=\'../images/skateboard_' + i + '.jpg\' style=\'width:100px\'>',
          '<p class=\'lead\'>C\'mon, <br/>You know you want it.</p>',
          '<a class=\'close-reveal-modal\'>&#215;</a>',
        '</div>'
        ].join('');
        $target.append(goTmpl);
      }
  }
};



var r = '';
var month = 'March';
var articleTmpl = [
  '<div class=\'polygonPlace\' style=\'position: absolute; left: -5px\'></div>',
  '<% _.each(entries, function(el, index, list) { %>',
  '<div class=\'box large-4 medium-12 columns\'>',
  '<article id=\'article<%= index %>\' class=\'boxShadow\' id=\'article<%= index %>\'>',
    '<hgroup>',
      '<h2><%= el.title %></h2>',
      '<h4><%= moment(el.publishedDate).format(\'MMM Do YYYY\') %></h4>',
    '</hgroup>',
    '<div style=\'display: none\' class=\'articleText full\'><%= el.content %></div>',
    '<p class=\'articleText lessFull\'><%= el.contentSnippet %></p>',
    '<p class=\'read readMore\'>\[ READ MORE \]</p>',
    '<p style=\'display:none\' class=\'read readLess\'>\[ READ LESS \]</p>',
  '</article>',
  '</div>',
  '<%}) %>'
].join('');
console.log(articleTmpl);
