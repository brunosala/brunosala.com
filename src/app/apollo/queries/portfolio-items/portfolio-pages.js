import gql from "graphql-tag";

const PORTFOLIO_PAGES_QUERY = gql`
    query PortfolioItem($id: ID!) {
        portfolioItem(id: $id) {
            date_string
            title
            subtitle
            body
            slider_fullres {
                url
                formats
            }
        }
    }
`;

export default PORTFOLIO_PAGES_QUERY;