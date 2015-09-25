var fs = require('fs')
var async = require('async')

var DirectoryHero = (function(){
  this.getFilePaths = getFilePaths;
  // we don't want to make this public
  this.getFilePathsForSingleDirectory = getFilePathsForSingleDirectory
  return {
    getFilePaths: this.getFilePaths
  }
})()

// TODO: Currently need to add the "/" to the end of directory you pass
function getFilePaths(directories, callback){
  // If a single directory path is passed in, convert it to an array
  if (directories.constructor != Array){
    directories = [directories]
  }

  var allPaths = []

  async.each(directories, function(directory, callback) {
    getFilePathsForSingleDirectory(directory, function(err, paths){
        allPaths = paths
        callback();
    })
  }, function(err){
    callback(null, allPaths)
  })
}

function getFilePathsForSingleDirectory(directory, callback){
  paths = []
  fs.readdir(directory, function(err, result){
    for(var pathIndex = 0; pathIndex < result.length; pathIndex++){
      paths.push(directory + result[pathIndex])
    }
    callback(null, paths)
  })
}

module.exports = DirectoryHero
