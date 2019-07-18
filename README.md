# gatsby-starter-nagui

<img src="./content/assets/demo-pc.gif" width="500">

<img src="./content/assets/demo-mobile.gif" height="325">

## Demo

-   <http://demo.nagui.me/>

## Quick Start

### 1. Install gatsby-cli

```sh
$ npm install -g gatsby-cli
```

### 2. Create Project

```sh
$ gatsby new my-blog-starter https://github.com/kimnagui/gatsby-starter-nagui
```

### 3. Start Project

```sh
$ cd my-blog-starter
$ gatsbyjs develop
# open http://localhost:8000
```

## Features

-   Tags & Categorys.
-   Pagination.
-   Show Recent Posts for category.
-   Styled-Components.
-   Atomic Design Components.
-   Mobile-First CSS.
-   Syntax highlighting in code blocks using PrismJS(Dracula).
-   Google Analytics.
-   Deploy AWS S3.

## Structure

```
src
 ├── components
 │     ├── atoms
 │     ├── molecules
 │     ├── organisms
 │     ├── templates
 │     └── seo.js
 ├── pages
 │     └── 404.js
 ├── utils
 │     └──typography.js
 └── html.js
```

## Config Files

```
config.js
gatsby-browser.js
gatsby-config.js
gatsby-node.js
```

## Todo
- Comment
- Search
- Bio in post
- Dark mode
- Design Tag & Category Index
