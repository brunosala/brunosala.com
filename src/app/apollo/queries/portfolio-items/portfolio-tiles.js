import gql from "graphql-tag";

const PORTFOLIO_TILES_QUERY = gql`
    query {
        portfolioItems {
            id
            title
            subtitle
            tag
            featured_image {
                url
            }
        }
    }
`;

export default PORTFOLIO_TILES_QUERY;