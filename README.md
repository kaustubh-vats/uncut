# uncut
NPM is a Node.js package that provides tools for getting the original implementation of overridden JavaScript native functions.

## Installation
You can install Original Implementation using npm:

```bash
npm install uncut
```

## Usage
Original Implementation provides the following functions:

### `isFunction`
Check whether the provided argument is a function.

```javascript
const { isFunction } = require('uncut');

console.log(isFunction(() => {})); // true
console.log(isFunction('not a function')); // false
```

### `isNativeFunction`
Check whether the provided function is a native function that has not been overridden.

```javascript
const { isNativeFunction } = require('uncut');

console.log(isNativeFunction(Array.prototype.map)); // true
console.log(isNativeFunction(() => {})); // false
```
### `isNativeObject`
Check whether the provided object is a native object that has not been overridden.

```javascript
const { isNativeObject } = require('uncut');

console.log(isNativeObject(Array)); // true
console.log(isNativeObject({})); // false
```

### `getOriginalFunction`
Get the original implementation of a function that has been overridden.

```javascript
const { getOriginalFunction } = require('uncut');

const originalMap = getOriginalFunction(Array.prototype.map);
const result = originalMap.call([1, 2, 3], x => x * 2);
console.log(result); // [2, 4, 6]
```

### `getOriginalFunctionFromString`
Get the original implementation of a function by providing the function name as a string.

```javascript
const { getOriginalFunctionFromString } = require('uncut');

const originalElementFromPoint = getOriginalFunctionFromString('Document.prototype.elementFromPoint');
const result = originalElementFromPoint.call(document, 10, 10);
console.log(result); // the element at (10, 10)
```

### `getOriginalProtypeMethod`
Get the original implementation of a prototype method by passing the object and function name.

```javascript
const { getOriginalProtypeMethod } = require('uncut');

const originalElementFromPoint = getOriginalProtypeMethod(Document, 'elementFromPoint');
const result = originalElementFromPoint.call(document, 10, 10);
console.log(result); // the element at (10, 10)
```

## Contributing
If you find a bug or have an idea for a new feature, please open an issue or submit a pull request on GitHub.