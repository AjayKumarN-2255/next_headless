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

    const isPrevious = !!params?.before;

    //defenition
    const varDefinition = [
        '$perpage:Int!',
        isPrevious ? '$before:String' : '$after:String',
        hasSearchTerm ? '$search:String' : '',
        hasCategory ? '$categoryName:String' : ''
    ].filter(Boolean).join(',');

    //where section
    const whereCondition = [
        hasSearchTerm ? 'search:$search' : '',
        hasCategory ? 'categoryName:$categoryName' : ''
    ].filter(Boolean);

    const whereClause = whereCondition.length > 0 ?
        `where : {${whereCondition.join(',')}}`
        : '';

    const query = gql`
    query GetPosts(${varDefinition}) {
    posts(
      ${isPrevious ? 'last:$perpage' : 'first:$perpage'},
      ${isPrevious ? 'before:$before' : 'after:$after'},
      ${whereClause}
    ) {
      nodes {
        id
        title
        excerpt
        date
        slug
        categories {
          nodes {
            name
            slug
          }
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
     }
   }
   `;

    const variables = {
        perpage: 5,
        ...(
            isPrevious ?
                { before: params.before }
                :
                { after: params.after }
        )
    }

    if (hasSearchTerm) {
        variables.search = searchTerm;
    }

    if (hasCategory) {
        variables.categoryName = category;
    }

    const data = await client.request(query, variables);

    return {
        posts: data.posts.nodes,
        pageInfo: data.posts.pageInfo,
        ...(hasSearchTerm && { searchTerm }),
        ...(hasCategory && { category })
    }
}

getAllPosts();
