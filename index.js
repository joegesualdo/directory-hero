var fs = require('fs')

var DirectoryHero = (function(){
  this.getFilePaths = getFilePaths;
  return {
    getFilePaths: this.getFilePaths
  }
})()

// TODO: Currently need to add the "/" to the end of directory you pass
function getFilePaths(directories, callback){
  paths = []
  for(var i = 0; i < directories.length; i++){
    (function(index){
      fs.readdir(directories[i], function(err, result){
        for(var pathIndex = 0; pathIndex < result.length; pathIndex++){
          paths.push(directories[index] + result[pathIndex])
        }
        callback(null, paths)
      })
    })(i);
  }
}

module.exports = DirectoryHero
