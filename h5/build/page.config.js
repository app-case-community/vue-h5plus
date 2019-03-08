const autoPages = (pages) => {
  var ps = {}
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page === undefined) continue
    var pageName = page
    var entry = ''
    if (page === '' || page === 'index') {
      pageName = 'index'
      entry = 'src/main.js'
    } else {
      var list = page.split('/')
      if (list[1] === undefined || list[1] === '') {
        pageName = `${list[0]}_index`
        entry = `src/${list[0]}/main.js`
      } else {
        pageName = `${list[0]}_${list[1]}`
        entry = `src/${page}/main.js`
      }
    }
    ps[pageName] = {
      entry
    }
  }
  return ps
}

module.exports = {
  autoPages
}
