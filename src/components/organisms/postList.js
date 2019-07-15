import React, { Fragment } from "react";
import PostListItem from "components/molecules/postListItem";
import Pagination from "components/molecules/pagination";

const PostList = ({ data, page, path, pageListSize }) => {
    return (
        <Fragment>
            {data.map(({ node }) => {
                return <PostListItem key={node.fields.slug} node={node} />;
            })}
            {page && (
                <Pagination page={page} path={path} listSize={pageListSize} />
            )}
        </Fragment>
    );
};

export default PostList;
