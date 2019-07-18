---
title: Hello World
date: "2019-05-01"
category: Trip
tags: 
    - helloworld
cover: ./helloworld.png
---

:smile:

First post.

Highlight code block.
```css
/* css */
h1 {
    padding: 0;
    margin-bottom: 10px;
    border: none;
}

hr {
    margin: 20px 0 40px 0;
}
```

```js
// javascript
class BlogIndex extends React.Component {
    render() {
        const { data, location, pageContext } = this.props;
        const { title, pageListSize } = data.site.siteMetadata;
        const posts = data.allMarkdownRemark.edges;

        return (
            <Layout location={location} title={title}>
                <SEO
                    title="Main"
                    keywords={[`blog`, `gatsby`, `javascript`, `react`]}
                />
                <PostList
                    data={posts}
                    page={pageContext}
                    path={"/"}
                    pageListSize={pageListSize}
                />
            </Layout>
        );
    }
}
```

![Chinese Salty Egg](./helloworld.png)
