import React from 'react'
import Searchbar from './Searchbar'
import Link from 'next/link'

function LatestPosts({
    posts,
    pageInfo,
    category,
    searchTerm
}) {


    if (posts?.length == 0) {
        return <div>No posts found</div>
    }


    return (
        <div className='mb-8'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl mb-4'>Latest Posts</h2>
                <div>
                    <Searchbar />
                </div>
            </div>

            <div className='flex flex-col mt-4'>
                <div className="divide-y divide-gray-300">
                    {posts?.map((post) => (
                        <Link
                            key={post?.id}
                            href={`/blog/${post?.slug}`}
                            className="flex justify-between items-center py-4 px-4 transition-all duration-200 hover:bg-gray-100 cursor-pointer rounded-md"
                        >
                            <div className="flex-1 mr-4">
                                <h2
                                    className="text-lg font-semibold text-gray-800 hover:text-blue-600"
                                    dangerouslySetInnerHTML={{ __html: post?.title }}
                                />
                                {post?.categories?.nodes?.length > 0 && (
                                    <div className="mt-1 text-sm text-gray-500">
                                        {post.categories.nodes.map((cat) => cat.name).join(", ")}
                                    </div>
                                )}
                            </div>
                            <p className="text-sm text-gray-400">
                                {new Date(post?.date).toLocaleDateString("de-DE")}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>

            {(pageInfo && pageInfo?.hasPreviousPage || pageInfo?.hasNextPage) && (
                <div className="flex justify-between mt-6 px-4">
                    {/* Previous Button */}
                    {pageInfo?.hasPreviousPage ? (
                        <Link
                            href={{
                                pathname: "/blog",
                                query: {
                                    before: pageInfo?.startCursor,
                                    ...(category && { category }),
                                    ...(searchTerm && { search: searchTerm }),
                                },
                            }}

                            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200"
                        >
                            &larr; Previous
                        </Link>
                    ) : <div></div>}

                    {/* Next Button */}
                    {pageInfo?.hasNextPage ? (
                        <Link
                            href={{
                                pathname: "/blog",
                                query: {
                                    after: pageInfo?.endCursor,
                                    ...(category && { category }),
                                    ...(searchTerm && { search: searchTerm }),
                                },
                            }}
                            className="px-4 py-2 bg-blue-600 flex items-center text-white rounded-md hover:bg-blue-700 transition-colors duration-200"
                        >
                            Next &rarr;
                        </Link>
                    ) : <div></div>}
                </div>
            )}

        </div>
    )
}

export default LatestPosts