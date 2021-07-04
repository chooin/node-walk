import fs from 'fs-extra'

export const isFile = (path) => {
  const stat = fs.statSync(path)

  return stat.isFile()
}

export const isDirectory = (path) => {
  const stat = fs.statSync(path)

  return stat.isDirectory()
}
