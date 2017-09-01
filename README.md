# docsify-edit-on-github
A plugin for docsify to generate a `edit on github` button on every pages. click the button to open corresponding `md` editing page on github.

```
<script src="//unpkg.com/docsify-edit-on-github@1.0.1/index.js"></script>
```

```
EditOnGithubPlugin.create(docBase, docEditBase, title)
```

* `docBase`: the document folder of your github project
* `docEditBase`: edit link of your github pages, by default, this is set automatically according to `docBase`
* `title`: the text of the button, default value: `Edit on github`

[sample coded](https://github.com/njleonzhang/vue-data-tables/blob/master/docs/index.html#L83)

[sample](https://njleonzhang.github.io/vue-data-tables/#/renderTable)
