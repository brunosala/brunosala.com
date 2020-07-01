import gql from "graphql-tag";

const PORTFOLIO_PAGES_QUERY = gql`
    query portfolioItems($slug: String) {
        portfolioItems(
        where: {
            slug: $slug
        }
        )
        {
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