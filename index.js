function isFunction(fn) {
  return typeof fn === 'function'
}

function isNativeFunction(fn) {
  if(!isFunction(fn)) {
    throw new Error('Expected a function, got ' + typeof fn + ' instead.');
  } else {
    return /native code/.test(fn.toString())
  }
}

function isNativeObject(obj){
  return typeof obj === 'object' && /native code/.test(obj.toString())
}

function getOriginalFunction(fn) {
  if (isNativeFunction(fn)) {
    return fn;
  }
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  if(iframe.contentWindow && iframe.contentWindow[fn.name]) {
    const originalFunction = iframe.contentWindow[fn.name];
    document.body.removeChild(iframe);
    return originalFunction;
  }
  document.body.removeChild(iframe);
  return null;
}

function getOriginalFunctionFromString(fn) {
  const iframe = document.createElement('iframe')
  iframe.style.display = 'none';
  document.body.appendChild(iframe);
  var originalFunction = iframe.contentWindow.eval(fn);
  document.body.removeChild(iframe);
  return originalFunction;
}

function getOriginalProtypeMethod(obj, method) {
  const originalFunction = Object.getPrototypeOf(obj.prototype)[method];
  return originalFunction;
}

module.exports = {
  isFunction,
  isNativeFunction,
  isNativeObject,
  getOriginalFunction,
  getOriginalFunctionFromString,
  getOriginalProtypeMethod
}