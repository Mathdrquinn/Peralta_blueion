console.log('The Iron Yard Rocks');
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

$(document).ready(function() {

  var go = function ($target) {
    goTmpl = '';
    for (var i = 1; i < 11; i++) {
      if (i<6) {
        goTmpl = '<a href=\'\' title=\'skateboard thing\' style=\'background\-image: url(../images/skateboard_' + i + '.jpg)\' id=\'board' + i + '\' class=\'large-1 columns boards toolio\'></a>';
        $target.append(goTmpl);
      }
      else {
        goTmpl = '<a href=\'\' title=\'skateboard thing\' style=\'background\-image: url(../images/skateboard_' + i + '.jpg)\' id=\'board' + i + '\' class=\'large-1 medium-1 small-1 columns boards boardsLatter toolio\'></a>';
        $target.append(goTmpl);
      }
    }
  };

  //Prints Skateboards
  go($('.skateboards'));

  //Tool Tips
  //$(document).find('.boards').tooltip({track: true});
  $( document ).tooltip({track: true});
  $( document ).tooltip({position: {of: '.boards', my: 'left+5 center+5', at: 'right+5 center+5'}});
  $( document ).tooltip({track: true});
  $( document ).tooltip({position: {of: '.boardsLatter', my: 'left+5 center+5', at: 'right+5 center+5'}});


  // getter
// var position = $( '.boards' ).tooltip( 'option', 'position' );
//
// // setter
// $( '.boards' ).tooltip( 'option', 'position', { my: 'left+15 center', at: 'right center', of: $(th) } );
  //Hover events to display iframes for sharing socially
  $('.social').on('mouseenter', '.butt', function(e) {
    e.preventDefault();
    console.log('mouseenter start');
    $(this).find('.frame').fadeIn(800);
    console.log('frame should appear');
    var $dot = $(this).data('dot').toString();
    var color = $(this).data('color').toString();
    console.log($dot + ' ' + color);
    $(this).siblings('#dots').children($dot).css('background\-color', color);
    $(this).siblings('#dots').children($dot).css('border\-color', color);
  });
  $('.social').on('mouseleave', '.butt', function(e) {
    e.preventDefault();
    console.log('mouseleave start');
    $(this).find('.frame').fadeOut(10);
    console.log('frame should disappear');
    var $dot = $(this).data('dot').toString();
    var color = 'white';
    console.log($dot + ' ' + color);
    $(this).siblings('#dots').children($dot).css('background\-color', color);
    $(this).siblings('#dots').children($dot).css('border\-color', color);
  });

  $('#subATag').on('mouseenter', function(e) {
    console.log('sub hover!');
    $(this).siblings('#dot').css('background\-color', '#E82C0C');
    $(this).siblings('#dot').css('border\-color', '#E82C0C');
  });
  $('#subATag').on('mouseleave', function(e) {
    console.log('sub hover over!');
    $(this).siblings('#dot').css('background\-color', 'white');
    $(this).siblings('#dot').css('border\-color', 'white');
  });
  ////////////////////////////////////////////////////////
  /** NAV EVENTS **/
  $('.navList').on('mouseenter', function(e) {
    $(this).find('.turnLeft').css('transform', 'rotate(90deg)');
    $(this).find('.turnRight').css('transform', 'rotate(-90deg)');
  });
  $('.navList').on('mouseleave', function(e) {
    $(this).find('.turnLeft').css('transform', 'rotate(0deg)');
    $(this).find('.turnRight').css('transform', 'rotate(0deg)');
  });

  $('#navTop').on('click', '.navList', function(e) {
    var loc = $(this).data('loc');
    if (loc == undefined) {loc='.contact'}
    console.log('should say .contact')
    console.log(loc);
    $('.polygonPlace').html('');
    $(loc).children('.polygonPlace').html('<div id=\'polygonDrop\' class=\'\'></div><div id=\'polygon\' class=\'\'>NAVIGATION</div>');

  });

////////////////////////////////////////////////////////
/** CAROUSEL **/

setInterval(function () {
    console.log('carousel: start');
    $('.active').fadeOut(3000);
    $('.onDeck').fadeIn(2000);
    $('.active').addClass('holder');
    $('.holder').removeClass('active');
    $('.onDeck').addClass('active');
    $('.active').removeClass('onDeck');
    $('.inTheHole').addClass('onDeck');
    $('.onDeck').removeClass('inTheHole');
    $('.holder').addClass('inTheHole');
    $('.inTheHole').removeClass('holder');
    var dot = $('.active').data('dot');
    console.log(dot);
    $(dot).siblings().removeClass('selected');
    $(dot).addClass('selected');

    console.log('carousel:end');
}, 8000);

$('#1').on('click', function () {
  console.log('click!');
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  $('.active').fadeOut(3000);
  $('#carouselImage1').fadeIn(2000);
  $('#carouselImage1').removeClass();
  $('#carouselImage1').addClass('active')
  $('#carouselImage2').removeClass();
  $('#carouselImage2').addClass('onDeck');
  $('#carouselImage3').removeClass();
  $('#carouselImage3').addClass('inTheHole');
});
$('#2').on('click', function () {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  console.log('click!');
  $('.active').fadeOut(3000);
  $('#carouselImage2').fadeIn(2000);
  $('#carouselImage1').removeClass();
  $('#carouselImage1').addClass('inTheHole')
  $('#carouselImage2').removeClass();
  $('#carouselImage2').addClass('active');
  $('#carouselImage3').removeClass();
  $('#carouselImage3').addClass('onDeck');
});
$('#3').on('click', function () {
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  console.log('click!');
  $('.active').fadeOut(3000);
  $('#carouselImage3').fadeIn(2000);
  $('#carouselImage1').removeClass();
  $('#carouselImage1').addClass('onDeck')
  $('#carouselImage2').removeClass();
  $('#carouselImage2').addClass('inTheHole');
  $('#carouselImage3').removeClass();
  $('#carouselImage3').addClass('active');
})


  ////////////////////////////////////////////////////////
  /** EVENTS FOR SKATEBOARDS **/
  var c = false;
  $('.skills').on('click', '.name', function(e) {
    e.preventDefault();
    if (!c) {
      c = true;
      console.log('rodney is go!');
      var saveFriends = window.saveFriends = $(this).closest('.skills').html();
      var name = $(this).data('name');
      var k = Number($(this).data('spot'));
      $(this).closest('.skills').find('.skillsLeft').html(vidArr[k].video);
      console.log('done');
      $('.skillsLeft').addClass('video');
      videoBoard(k);
    }
    else {
      var name = $(this).data('name');
      var k = Number($(this).data('spot'));
      $(this).closest('.skills').find('.skillsLeft').html(vidArr[k].video);
      console.log('done');
      $('.skillsLeft').addClass('video');
      videoBoard(k);
    }
  });

//<a id=\'close\' href=\'#\' class=\'button [secondary success alert]\'>CLOSE</a>
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
  }

  $('.skills').on('dblclick', '#whoa', function(e) {
    e.preventDefault();
    $(this).closest('.skills').html(saveFriends);
    $('.skillsRight').removeClass('black');
  });
  $('.skills').on('click', '#close', function(e) {
    e.preventDefault();
    $(this).closest('.skills').html(saveFriends);
    $('.skillsRight').removeClass('black');
  })

  $('.skills').on('mouseenter', 'h5', function(e) {
    e.preventDefault();
    var name = $(this).data('name');
    console.log(name);
    $(this).css('color', '#E82C0C')
    $(this).parent('.pro').css('background\-image', 'rgba(0, 0, 0, 0.2)');
    $(this).siblings('p').text('Click to see ' + name + '\'s highlight footage.')
    $(this).siblings('p').removeClass('hidden');
  });
  $('.skills').on('mouseleave', '.pro', function(e) {
    e.preventDefault();
    $(this).children('h5').css('color', 'white');
    $(this).children('p').addClass('hidden');
  });

  //////////////////////////////////////////////////////////
  /** ARTICLE EVENTS **/
  //Updates articles for most recent blogs
  upBlog('http://powell-peralta.com/blog/rss', $('#main'));

  $('#main').on('click', '.readMore', function(e) {
    e.preventDefault();
    window.saveMain = $('#main').html;
    console.log('readme click');
    $(this).closest('.box').siblings().fadeToggle(400);
    $(this).closest('.box').delay(400).removeClass('large-4');
    $(this).closest('.box').siblings().delay(400).addClass('large-12');
    $(this).siblings('.lessFull').fadeOut();
    $(this).siblings('.full').fadeIn();
    $(this).fadeOut();
    $(this).siblings('.readLess').fadeIn();
  });

  $('#main').on('click', '.readLess', function(e) {
    e.preventDefault();
    upBlog('http://powell-peralta.com/blog/rss', $('#main'));

  });

});
