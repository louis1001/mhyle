import path from 'path'

class TreeNode{

  constructor(name_= ".", path_= ".", component = undefined, parent_= undefined, isDir_= true){
    this.name = name_
    this.path = path_
    this.parent = parent_
    this.isDir = isDir_

    if(isDir_){
      this.children = []
    }else{
      this.component = component
    }
  }
}

export default class DirectoryTree{

  constructor(modules, rootDirPath){
    this.modules = modules
    this.rootDirPath = rootDirPath
    this.fileNames = modules.map((x) => x.dir.slice(rootDirPath.length))
    this.tree = []
    this.constructTree()
  }

  createDirectoryLayer(name_="", path_="", component = undefined, parent = undefined, isDir = true){
    let newLayer = new TreeNode (
      name_,
      path.normalize(this.rootDirPath + "/" + path_),
      component,
      parent,
      isDir,
    )

    return newLayer
  }

  findNode(nodeName){

    for (let layer of this.tree.children){
      const foundNode = this.findNodeInLayer(layer, nodeName)

      if (foundNode !== undefined)
        return foundNode
    }
  }

  findNodeInLayer(layer, nodeName){
    return layer.find(x => x.name == nodeName)
  }

  constructTree(){
    const newTreeStructure = this.createDirectoryLayer()

    this.modules.forEach((mod, index)=>{
      const file = this.fileNames[index]
      let currentParent = newTreeStructure
      let separator = file.indexOf("/") != -1 ? "/" : "\\"
      let pathComponents = file.split(separator)

      for(let i = 1; i < pathComponents.length; i++){

        const currentPathComponent = pathComponents[i]

        const currentPath = path.join(...pathComponents.slice(0, i+1))
        
        let currentLayer = this.findNodeInLayer(currentParent.children, currentPathComponent)

        if(currentLayer === undefined){
          let currentPathNormalized = path.normalize(file)
          currentLayer =
            this.createDirectoryLayer(
              currentPathComponent,
              currentPath,
              mod.component,
              currentParent,
              !currentPathComponent.endsWith(".vue")
            )

          currentParent.children.push(currentLayer)
        }

        currentParent = currentLayer
      }
    })

    this.tree = newTreeStructure
  }
}