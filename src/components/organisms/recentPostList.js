import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import RecentPostItem from "components/molecules/recentPostItem";

const PostList = styled.div`
    #title {
        font-weight: bold;
        margin: 0;
        padding: 0 10px 10px 10px;
        color: ${props => props.theme.recentpostlist.header};

        a {
            color: ${props => props.theme.recentpostlist.category};
            &:hover {
                text-decoration: underline;
            }
        }
    }
`;

const RecentPostList = ({ category, data }) => {
    return (
        <PostList>
            <div id="title">
                Recent "<Link to={`/category/${category}`}>{category}</Link>"
                Posts
            </div>
            {data.map((node, index) => (
                <RecentPostItem key={index} data={node} />
            ))}
        </PostList>
    );
};

export default RecentPostList;
