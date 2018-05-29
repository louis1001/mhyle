import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Menu from '@/components/menu'

import SceneWrapper from '@/components/SceneWrapper'

import sceneTree from '@/router/sceneLoader'

const originalRoutes = {
  routes: [
  ]
}

function populateTree(layer, acumulator = {}, folderPath="", first=false){
  const folderPathLength = folderPath.length
  let newRoute = {
    path: layer.path.split("/").pop(),
    component: undefined,
    name: layer.name,
  }

  if(layer.isDir){
    if(first){
      newRoute.name = "SceneWrapper"
      newRoute.path = "/scenes"
      newRoute.component = SceneWrapper
    }else{
      newRoute.component = layer.children.find(x=> (x.component !== undefined && x.component.name.toLowerCase() == "index")).component
    }
    
    newRoute.children = []
    for(let child of layer.children){
      populateTree(child, newRoute, folderPath)
    }
  }else{
    const lComponent = layer.component
    
    newRoute.component = lComponent
    
    if(newRoute.path.endsWith(".vue"))
    newRoute.path = newRoute.path.replace(/\.vue/, "")
  }

  if(newRoute.name.endsWith(".vue")){ 
    newRoute.name = newRoute.name.replace(".vue", "")
  }

  if(newRoute.component){
    if(newRoute.component.name.endsWith(".vue")){
    
    newRoute.component.name = newRoute.component.name.replace(".vue", "")
    }
  }

  if(first){
    acumulator.routes.push(newRoute)
  }else{
    if(newRoute.name.toLowerCase() != "index")
    acumulator.children.push(newRoute)
  }

  return acumulator
}

const routeTree = populateTree(sceneTree.tree, originalRoutes, sceneTree.rootDirPath, true)

console.log(routeTree);

routeTree.routes.push({
  path: '/menu',
  name: 'Menu',
  component: Menu
},
{
  path: '/',
  name: 'Home',
  component: Home,
})

Vue.use(Router)

const router = new Router(routeTree)

router.tree = routeTree
export default router
