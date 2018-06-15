---
title: snippets
tags:
---
数组扁平化
```javascript
const flatten = arr => arr.reduce((a,v)=>a.concat(v),[])
```