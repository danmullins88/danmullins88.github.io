castle.onmousedown = function(event) {

  let shiftX = event.clientX - castle.getBoundingClientRect().left;
  let shiftY = event.clientY - castle.getBoundingClientRect().top;

  castle.style.position = 'absolute';
  castle.style.zIndex = 1000;
  document.body.append(castle);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    castle.style.left = pageX - shiftX + 'px';
    castle.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }


  document.addEventListener('mousemove', onMouseMove);


  castle.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    castle.onmouseup = null;
  };

};

castle.ondragstart = function() {
  return false;
};


one.onmousedown = function(event) {

  let shiftX = event.clientX - one.getBoundingClientRect().left;
  let shiftY = event.clientY - one.getBoundingClientRect().top;

  one.style.position = 'absolute';
  one.style.zIndex = 1000;
  document.body.append(one);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    one.style.left = pageX - shiftX + 'px';
    one.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener('mousemove', onMouseMove);

  one.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    one.onmouseup = null;
  };

};

one.ondragstart = function() {
  return false;
};


two.onmousedown = function(event) {

  let shiftX = event.clientX - two.getBoundingClientRect().left;
  let shiftY = event.clientY - two.getBoundingClientRect().top;

  two.style.position = 'absolute';
  two.style.zIndex = 1000;
  document.body.append(two);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    two.style.left = pageX - shiftX + 'px';
    two.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }


  document.addEventListener('mousemove', onMouseMove);


  two.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    two.onmouseup = null;
  };

};

two.ondragstart = function() {
  return false;
};


three.onmousedown = function(event) {

  let shiftX = event.clientX - three.getBoundingClientRect().left;
  let shiftY = event.clientY - three.getBoundingClientRect().top;

  three.style.position = 'absolute';
  three.style.zIndex = 1000;
  document.body.append(three);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    three.style.left = pageX - shiftX + 'px';
    three.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }


  document.addEventListener('mousemove', onMouseMove);


  three.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    three.onmouseup = null;
  };

};

three.ondragstart = function() {
  return false;
};


four.onmousedown = function(event) {

  let shiftX = event.clientX - four.getBoundingClientRect().left;
  let shiftY = event.clientY - four.getBoundingClientRect().top;

  four.style.position = 'absolute';
  four.style.zIndex = 1000;
  document.body.append(four);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    four.style.left = pageX - shiftX + 'px';
    four.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }


  document.addEventListener('mousemove', onMouseMove);


  four.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    four.onmouseup = null;
  };

};

four.ondragstart = function() {
  return false;
};


five.onmousedown = function(event) {

  let shiftX = event.clientX - five.getBoundingClientRect().left;
  let shiftY = event.clientY - five.getBoundingClientRect().top;

  five.style.position = 'absolute';
  five.style.zIndex = 1000;
  document.body.append(five);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    five.style.left = pageX - shiftX + 'px';
    five.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }


  document.addEventListener('mousemove', onMouseMove);


  five.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    five.onmouseup = null;
  };

};

five.ondragstart = function() {
  return false;
};


six.onmousedown = function(event) {

  let shiftX = event.clientX - six.getBoundingClientRect().left;
  let shiftY = event.clientY - six.getBoundingClientRect().top;

  six.style.position = 'absolute';
  six.style.zIndex = 1000;
  document.body.append(six);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    six.style.left = pageX - shiftX + 'px';
    six.style.top = pageY - shiftY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }


  document.addEventListener('mousemove', onMouseMove);


  six.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    six.onmouseup = null;
  };

};

six.ondragstart = function() {
  return false;
};
