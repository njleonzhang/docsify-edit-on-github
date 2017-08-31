;(function(win) {
  win.EditOnGithubPlugin = {}

  function create(docBase, title) {
    title = title || 'Edit on github'

    function editDoc(event) {
      var matchedArray = location.hash.match(/^#\/(.*)\?|^#\/(.*)$/)
      var docName = matchedArray && (matchedArray[1] || matchedArray[2])

      if (docName) {
        var editLink = docBase + docName + '.md'
        window.open(editLink)
        event.preventDefault()
        return false
      } else {
        return true
      }
    }

    win.EditOnGithubPlugin.editDoc = editDoc

    return function(hook) {
      var header = [
        '<div style="overflow: auto">',
        '<p style="float: right"><a href="',
        docBase,
        '" target="_blank" onclick="EditOnGithubPlugin.editDoc(event)">',
        title,
        '</a></p>',
        '</div>'
      ].join('')

      hook.afterEach(function (html) {
        return header + html
      })
    }
  }

  win.EditOnGithubPlugin.create = create
}) (window)
