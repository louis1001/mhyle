import path from 'path'
import DirectoryTree from '../utils/directoryTree'

function requireAll(requireContext, pattern) {
  return requireContext.keys()
    .filter(fileName => pattern.test(fileName))
    .map(fileName => {
      return requireContext(fileName)
    })
    .reduce((obj, mod) => {
      let fileName = path.normalize(mod.default.__file).replace(/\\/g, "/")
      
      obj.push({dir: fileName, component: mod.default})
      
      return obj
    }, [])
}

function loadSceneContext() {
  let moduleContext = require.context('@/scenes', true)

  const vuePattern = new RegExp(".+\\.vue$")

  return requireAll(moduleContext, vuePattern)
}
const sceneList = loadSceneContext()


let dTree = new DirectoryTree(sceneList, "src/scenes")


export default dTree
