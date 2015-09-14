# Ezjs

[![Version](https://img.shields.io/badge/version-1.0-yellow.svg?style=flat-square)](https://github.com/KingShimkus/Ezjs/blob/master/src/ezjs.js#L5)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://raw.githubusercontent.com/KingShimkus/Ezjs/master/LICENSE)
[![Gitter](https://img.shields.io/badge/GITTER-join%20chat-45cba1.svg?style=flat-square)](https://gitter.im/KingShimkus/Ezjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge)

This is a Javascript Library that adds simplicity to a complex Javascript. It extends the prototypes of the default Javascript objects in order to add more methods and capabilities for more efficient and faster code. Kind of like [Underscore.js](http://underscorejs.org/) and [Easify](https://github.com/salexzee/Easify), just a little more dangerous. 


# Installation

To get started using Ezjs, just include `ezjs.js` or `ezjs.min.js` into your HTML, like so:

```html
<script src="ezjs.js"></script>
```
Or for the minified version (improves performance and load time):
```html
<script src="ezjs.min.js"></script>
```
It is also recommended that you put the Ezjs `<script>` tags above you closing body tag, `</body>`. 


# Documentation  

This is the documentation for Ezjs. If you see an alias that means that that method name can also be called by the alias, for example:
``` javascript
"brenden".capitalize(); //==> "Brenden"
```
Is the same as:
``` javascript
"brenden".cap(); //==> "Brenden"
```
They both return the same result, `.cap()` is just easier to remember and is faster. 

String Methods
---
`String.capitalize()`- Capitalizes the first letter of a string.

*Alias:* `.cap()`

**Examples:** 
``` javascript
"brenden".capitalize(); //==> "Brenden"
"brenden".cap(); //==> "Brenden"
```


 

