fixScale = function(doc) {
  //fix for iOS viewport zooming bug that occurs on orientation change
  //https://gist.github.com/mathiasbynens/901295
  //DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  // By @mathias, @cheeaun and @jdalton
  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }

};
