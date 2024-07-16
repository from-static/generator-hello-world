# `generator-hello-world`

This is a basic example of a `generator` in the static Application Design Approach. A `generator` (static site generator) processes a `static.json` file and produces a static web page or dynamic web application.

By referencing this `generator` in a `static.json` file and providing a `data.attributes.message` value, the `generator` will produce a static web page with the provided `data.attributes.message`.

A template repository that references this generator can be found at: https://github.com/from-static/template-hello-world. 

This template repository can be used to create custom distributions of the generator on GitHub Pages by only modifying the `data.attributes.message` value in the `static.json` file.

## Example `static.json` File

```json
{
    "_static": {
        "generator": {
            "name": "@from-static/generator-hello-world"
        }
    },
    "data": {
        "attributes": {
            "message": "Hello, @from-static!"
        }
    }
}
```