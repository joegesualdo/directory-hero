## Directory Hero
> Node utilities to manipulate and get information about directories

## Install
```
$ npm install --save directory-hero
```

## Usage
```javascript
var DirectoryHero = require("directory-hero")

directories = [__dirname+"/"]
DirectoryHero.getFilePaths(directories, function(err, paths){
  console.log(paths)
})
```

## API
### .getFilePaths(directoriesArray, callback)
```javascript
var DirectoryHero = require("directory-hero")

directories = [__dirname+"/"]
DirectoryHero.getFilePaths(directories, function(err, paths){
  console.log(paths)
})
```
