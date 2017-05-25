# ay-flatten
[![npm version](https://img.shields.io/badge/npm-1.0.1-green.svg)](https://www.npmjs.com/package/ay-flatten)

flatten objects

### Install:
```
npm install ay-flatten
```
### Usage Example:
```javascript
const flatten = require('ay-flatten');
const obj = {
    person: {
        name: {
            first: 'John',
            last: 'Doe'
        },
        friends: [{
            name: {
                first: 'Jane',
                last: 'Doe'
            }
        }, {
            name: {
                first: 'Princess',
                middle: 'Consuela',
                last: 'Banana-Hammock'
            }
        }]
    }
}
console.log(flatten(obj))
```
### Output
```javascript
{ 'person.name.first': 'John',
  'person.name.last': 'Doe',
  'person.friends[0].name.first': 'Jane',
  'person.friends[0].name.last': 'Doe',
  'person.friends[1].name.first': 'Princess',
  'person.friends[1].name.middle': 'Consuela',
  'person.friends[1].name.last': 'Banana-Hammock' }
```