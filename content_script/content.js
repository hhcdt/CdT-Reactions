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


/*var elements = document.getElementsByTagName('*');

for (var i=0; i<elements.length; i++) {
	var element = elements[i];

	for (var j=0; j<element.childNodes.length; j++) {
		var node = element.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			var replacedLike = text.replace(/Like/gi,'Nice Pilaf');
			var replacedLove = text.replace(/Love/gi,'Diode');
			var replacedHaha = text.replace(/Haha/gi,'Thanks for Letting Us Know');
			var replacedWow = text.replace(/Wow/gi,'+1 Rare Pepe');
			var replacedSad = text.replace(/Sad/gi,'Girls Like This');
			var replacedAngry = text.replace(/Angry/gi,'This Post for Trash Dumpyard');

			if (replacedLike !== text) {
				element.replaceChild(document.createTextNode(replacedLike),node);}
			if (replacedLove !== text) {
				element.replaceChild(document.createTextNode(replacedLove),node);}
			if (replacedHaha !== text) {
				element.replaceChild(document.createTextNode(replacedHaha),node);}
			if (replacedWow !== text) {
				element.replaceChild(document.createTextNode(replacedWow),node);}
			if (replacedAngry !== text) {
				element.replaceChild(document.createTextNode(replacedAngry),node);}
			if (replacedSad !== text) {
				element.replaceChild(document.createTextNode(replacedSad),node);}
			}
		}
	}
*/

//UFILikeLink _4x9- _4x9_ _48-k


//$(document).on("click", '*', function (fireContentLoadedEvent) {
//  $(this).text('Diode');
//}

//if (document.URL.contains("cirquedutwerque"))

/*var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Like/gi, 'Nice Pilaf');
            var replacedVen = text.replace(/Ben Roytenberg/gi, 'Вениамин Ройтенберг');

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
            if (replacedVen !== text) {
              element.replaceChild(document.createTextNode(replacedVen),node);
            }
        }
    }
}*/

//var replaced = $("body").html().replace(/-1o9-2202/g,'The ALL new string');
//$("body").html(replaced);

/*walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

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

	v = v.replace(/\bThe Cloud\b/g, "My Butt");
	v = v.replace(/\bThe cloud\b/g, "My butt");
	v = v.replace(/\bthe Cloud\b/g, "my Butt");
	v = v.replace(/\bthe cloud\b/g, "my butt");

	textNode.nodeValue = v;
}
*/

/*document.addEventListener('DOMContentLoaded',fireContentLoadedEvent, false);

function fireContentLoadedEvent(){
	console.log ("DOMContentLoaded");
	for (var i=0; i<elements.length; i++) {
		var element = elements[i];

		for (var j=0; j<element.childNodes.length; j++) {
			var node = element.childNodes[j];

			if (node.nodeType === 3) {
				var text = node.nodeValue;
				var replaceLike = text.replace(/Like/gi,'Nice Pilaf');
				//var replaceLove = text.replace(/Love/gi,'Diode');
				//var replaceHaha = text.replace(/Haha/gi,'Thanks for Letting Us Know');
				//var replaceWow = text.replace(/Wow/gi,'+1 Rare Pepe');
				//var replaceSad = text.replace(/Sad/gi,'Girls Like This');
				//var replaceAngry = text.replace(/Angry/gi,'This Post for Trash Dumpyard');

				if (replaceLike !== text) {
					element.replaceChild(document.createTextNode(replaceLike),node);}
				/*if (replaceLove !== text) {
					element.replaceChild(document.createTextNode(replaceLove),node);}
				if (replaceHaha !== text) {
					element.replaceChild(document.createTextNode(replaceHaha),node);}
				if (replaceWow !== text) {
					element.replaceChild(document.createTextNode(replaceWow),node);}
				if (replaceAngry !== text) {
					element.replaceChild(document.createTextNode(replaceAngry),node);}
				if (replaceSad !== text) {
					element.replaceChild(document.createTextNode(replaceSad),node);}

				}
			}
		}
	}*/
