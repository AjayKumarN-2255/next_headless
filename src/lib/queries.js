const baseUrl = process.env.WORDPRESS_URL;
import { gql, GraphQLClient } from "graphql-request";

const client = new GraphQLClient('http://localhost:10028/headless');
export async function getCategories(params) {
    const query = gql`query getCategories {
                          categories {
                                nodes {
                                    id
                                    name
                                    slug
                                }
                            }
                        }`
    const data = await client.request(query);
    return data.categories.nodes;
}

export async function getAllPosts(searchTerm, category, params) {

    const hasSearchTerm = searchTerm && searchTerm.trim() !== '';
    const hasCategory = category && category.trim() !== '';
    const isPrevious = !!params.before;

}