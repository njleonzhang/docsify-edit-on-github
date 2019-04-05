# docsify-edit-on-github
A plugin for docsify to generate a `edit on github` button on every pages. click the button to open corresponding `md` editing page on github.

```html
<script src="//unpkg.com/docsify-edit-on-github@1.0.1/index.js"></script>
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

* `docBase`: the document folder of your github project (e.g.: https://github.com/docsifyjs/docsify/blob/master/docs/)
* `docEditBase`: edit link of your github pages, by default, this is set automatically according to `docBase`
* `title`: the text of the button, default value: `Edit on github`

[Code example](https://github.com/njleonzhang/vue-data-tables/blob/6bb632419506a14ceff559708180883097d5afa2/docs/index.html#L179-L181)

[Result example](https://www.njleonzhang.com/vue-data-tables/#/en-us/basic)
