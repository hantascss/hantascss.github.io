$(document).ready(function () {

  // Variables
  var $codeSnippets = $('.code-example-body'),
    $nav = $('.navbar'),
    $body = $('body'),
    $window = $(window),
    $popoverLink = $('[data-popover]'),
    navOffsetLeft = $nav.offset().left,
    $document = $(document),
    entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    }

  function init() {
    $window.on('scroll', onScroll)
    $window.on('resize', resize)
    $popoverLink.on('click', openPopover)
    $document.on('click', closePopover)
    $('a[href^="#"]').on('click', smoothScroll)
    buildSnippets();
  }

  function smoothScroll(e) {
    e.preventDefault();
    $(document).off("scroll");
    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollLeft': $target.offset().left - 40
    }, 0, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  }

  function openPopover(e) {
    e.preventDefault()
    closePopover();
    var popover = $($(this).data('popover'));
    popover.toggleClass('open')
    e.stopImmediatePropagation();
  }

  function closePopover(e) {
    if ($('.popover.open').length > 0) {
      $('.popover').removeClass('open')
    }
  }

  $("#button").click(function () {
    $('html, body').animate({
      scrollLeft: $("#elementtoScrollToID").offset().left
    }, 2000);
  });

  function resize() {
    $body.removeClass('has-docked-nav')
    navOffsetLeft = $nav.offset().left
    onScroll()
  }

  function onScroll() {
    if (navOffsetLeft < $window.scrollLeft() && !$body.hasClass('has-docked-nav')) {
      $body.addClass('has-docked-nav')
    }
    if (navOffsetLeft > $window.scrollLeft() && $body.hasClass('has-docked-nav')) {
      $body.removeClass('has-docked-nav')
    }
  }

  function escapeHtml(string) {
    return String(string).replace(/[&<>"'\/]/g, function (s) {
      return entityMap[s];
    });
  }

  function buildSnippets() {
    $codeSnippets.each(function () {
      var newContent = escapeHtml($(this).html())
      $(this).html(newContent)
    })
  }


  init();

});

window.onload = function() {    // 监听鼠标滑轮
	var mousewheelevt = (/Firefox/i.test(navigator.userAgent))
		?"DOMMouseScroll" : "mousewheel";
	if(document.attachEvent) {
		document.attachEvent("on" + mousewheelevt, function(e){
			mousewheel_event(e.wheelDelta);
		});
	}else if(document.addEventListener) {
		document.addEventListener(mousewheelevt, function(e){
			mousewheel_event(e.detail);
		}, false);
	}
	// 设置每次滚动长度，单位 px
	var scroll_width = 100;
	function mousewheel_event(delta) {
		// 滑轮向上滚动，滚动条向左移动，scrollleft-
		if(delta > 0) {
			document.getElementsByTagName("html")[0].scrollLeft
				-= scroll_width;
		}
		// 滑轮向下滚动，滚动条向右移动，scrollleft+
		else {
			document.getElementsByTagName("html")[0].scrollLeft
				+= scroll_width;
		}
	}
};
