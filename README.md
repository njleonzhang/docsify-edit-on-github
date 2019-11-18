# docsify-edit-on-github
A plugin for docsify to generate a `edit on github` button on every pages. click the button to open corresponding `md` editing page on github.

```html
<script src="//unpkg.com/docsify-edit-on-github/index.js"></script>
```

```html
<script>
  window.$docsify = {
    // your config
    // ...
    plugins: [
      EditOnGithubPlugin.create(docBase, docEditBase, title)
    ]
  }
</script>
```

* `docBase`: [String] the document folder of your github project (e.g.: https://github.com/docsifyjs/docsify/blob/master/docs/)
* `docEditBase`: [String] edit link of your github pages, by default, this is set automatically according to `docBase`
* `title`: [String | Function] the text of the button, default value: `Edit on github`. If passed as function, then the title can be customized according to file path. for example:
  ```
    EditOnGithubPlugin.create(
      'https://github.com/docsifyjs/docsify/blob/master/docs/',
      null,
      function(file) {
        if (file.indexOf('en') === -1) {
          return '编辑'
        } else {
          return 'edit on git'
        }
      }
    )
  ```

[Code example](https://github.com/njleonzhang/vue-data-tables/blob/6bb632419506a14ceff559708180883097d5afa2/docs/index.html#L179-L181)

[Result example](https://www.njleonzhang.com/vue-data-tables/#/en-us/basic)
