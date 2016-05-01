walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;
	if (node.tagName){
		if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
		    || node.classList.contains('ace_editor')) {
			return;
		}
}

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bAngry\b/g, 'This Post for Trash Dumpyard');
  textNode.nodeValue = v;
	v = v.replace(/\bLike\b/g, 'Nice Pilaf');
  textNode.nodeValue = v;
	v = v.replace(/\bLove\b/g, 'Diode');
  textNode.nodeValue = v;
	v = v.replace(/\bSad\b/g, 'Girls Like This');
  textNode.nodeValue = v;
	v = v.replace(/\bHaha\b/g, 'Thanks for Letting Us Know');
  textNode.nodeValue = v;
	v = v.replace(/\bWow\b/g, '+1 Pepe');
	textNode.nodeValue = v;
  v = v.replace(/\bBen Roytenberg\b/g, 'Вениамин Ройтенберг');
	textNode.nodeValue = v;
}

function userIsInGroup(groupId) {
  return window.location.toString().indexOf("facebook.com/groups/" + groupId) > -1;
}

//alert(window.location.toString());
//alert($(location).attr('href'));

var cdtGroups = [
  'HHCirqueDuTwerque',
  'CdTPoRusski',
  '1693588754259442', // Swift
  '1735685370005125', // Ohio
  '1756785557888301', // Kanye
  '1140775155942036', // Gamers
  '1035651093192970', // Post Toast Aesthetics
  '821023758002317',  // Toast Aesthetics
  'CdTChicks',
  '1196924153654960', // Cats
  'cdtHousing',
  '1633871026865938', // Dumpyard
  'hhsneks',
  '1781290548766693', // CdTunes
  'realsingleshhct', // Singles
  '482425228622242' // Les Canadiens
];

function userFeelsAtHome() {
  // true if the user is in any of the hardcoded cdt groups
  return cdtGroups
      .map(function(groupId) {
        return userIsInGroup(groupId);
      })
      .reduce(function(inGroupLeft, inGroupRight) {
        return inGroupLeft || inGroupRight;
      })
}

// All DOM manipulation must exist inside this "content script" in order to execute in the proper context of the page

href = chrome.extension.getURL('content_script/replace-reactions.css');

function controlSystem() {
  if (!userFeelsAtHome()) {
    document.getElementById('CdT').disabled=true;
    document.getElementById('CdT').remove();
    //$('a[href='href']')[0].disabled=true;
    //$('link[rel="stylesheet"][href='href']').remove();
  }
  if (userFeelsAtHome()) {
    appendStyleNode(href);
  }
}

// inject the css file into the head element
  function appendStyleNode(href) {
      var cssNode = document.createElement('link');
      cssNode.type = 'text/css';
      cssNode.rel = 'stylesheet';
      cssNode.id = 'CdT';
      cssNode.href = href;
      document.getElementsByTagName('head')[0].appendChild(cssNode);
  }

//controlSystem();


/*var $banner = null;

function updateBanner() {
  var $body = $('body');

  if (!userFeelsAtHome()) {       //!userFeelsAtHome()
    if ($banner == null) {
      $banner = $('<div></div>')
          .text("You are outside of CdT.") //"You are OUTSIDE of CdT."
          .css({
            backgroundColor: '#ffbbbb',
            color: '#444444',
            position: 'absolute',
            top: 52,
            left: 0,
            width: '100%',
            padding: 20,
            fontSize: '2em',
            textAlign: 'center'
          });
    }

    $body.append($banner);

    var isOnNewsfeed = window.location.pathname == '/';

    var paddingTop = 92;
    if (isOnNewsfeed) {
      paddingTop = 78;
    }
    $body.css({paddingTop: paddingTop});
  } else {
    if ($banner != null) {
      $banner.remove();
      $body.css({paddingTop: 0});
    }
  }
}*/


// Helper function to livequery for elements being added to the page.
(function (win) {
  'use strict';

  var listeners = [],
      doc = win.document,
      MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
      observer;

  function ready(selector, fn) {
    // Store the selector and callback to be monitored
    listeners.push({
      selector: selector,
      fn: fn
    });
    if (!observer) {
      // Watch for changes in the document
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // Check if the element is currently in the DOM
    check();
  }

  function check() {
    // Check the DOM for elements matching a stored selector
    for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
      listener = listeners[i];
      // Query for elements matching the specified selector
      elements = doc.querySelectorAll(listener.selector);
      for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
        element = elements[j];
        // Make sure the callback isn't invoked with the
        // same element more than once
        if (!element.ready) {
          element.ready = true;
          // Invoke the callback with the element
          listener.fn.call(element, element);
        }
      }
    }
  }

  // Expose `ready`
  win.ready = ready;

})(window);

function process(element) {
  //updateBanner();
  controlSystem();
  walk(document.body);

  var elementIsOnCdT = $(element)
          .find('a')
          .toArray()
          .map(function (link) {
            return $(link).text();
          })
          .indexOf('Cirque du Twerque') > -1;

  //if (!userFeelsAtHome() && !elementIsOnCdT) {
  //  var css = {backgroundColor: '#ffeeee'};

    //$(element).css(css);
    //$(element).find('form div').css(css);
    //$(element).find('form span').css(css);

    // Trying to update placeholder on comment boxes.
    //console.log($(element).find('.UFIAddCommentInput div'));
    //$(element).find('.UFIAddCommentInput div').each(function(div) {
    //  console.log($(div).text());
    //  if ($(div).text().indexOf('Write a comment') == 0) {
    //    $(div).text('Write a comment (WARNING: This is outside of CdT.');
    //  }
    //});
  //}
}

// Listeners
ready('.userContentWrapper', function (element) {
  process(element);
});

ready('UFILikeLink _4x9- _4x9_ _48-k', function (element) {
  process(element);
});

ready('UFILikeLink _4x9- _4x9_ _48-k UFILinkBright', function (element) {
  process(element);
});

ready('_2r6l accessible_elem', function(element) {
  process(element);
});

ready('_2r6l', function(element) {
  process(element);
});

ready('_d6l', function (element) {
  process(element);
});

ready('_4sm1', function (element) {
  process(element);
});

// Trying to update placeholder on comment boxes.
//ready('.UFIAddCommentInput', function(element) {
//  var commentWrapper = $(this).closest('.userContentWrapper');
//  process(commentWrapper);
//});

ready('#contentArea', controlSystem);
ready('#contentArea', walk);
