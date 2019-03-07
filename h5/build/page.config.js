const autoPages = (pages) => {
  var ps = {}
  for (let i = 0; i < pages.length; i++) {
    const page = pages[i]
    if (page === undefined) continue
    var pageName = page
    var entry = ''
    var filename = ''
    if (page === '' || page === 'index') {
      pageName = 'index'
      entry = 'src/main.js'
      filename = 'index.html'
    } else {
      var list = page.split('/')
      if (list[1] === undefined || list[1] === '') {
        entry = `src/${list[0]}/main.js`
        filename = `${list[0]}_index.html`
      } else {
        entry = `src/${page}/main.js`
        filename = `${list[0]}_${list[1]}.html`
      }
    }
    ps[pageName] = {
      entry,
      filename
    }
  }
  return ps
}

module.exports = {
  autoPages
}
