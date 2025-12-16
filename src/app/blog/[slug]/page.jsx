import { getSinglePost } from '@/lib/queries';
import React from 'react';

export default async function SinglePost({ params }) {
    const { slug } = await params;
    const postData = await getSinglePost(slug)

    return (
        <article className="max-w-3xl mx-auto px-4 py-10">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {postData?.title}
            </h1>
            {/* Meta */}
            <div className="flex flex-wrap items-center text-sm text-gray-500 mb-6 gap-4">
                <span>
                    {new Date(postData.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </span>

                {postData.author?.node?.name && (
                    <span>By {postData.author.node.name}</span>
                )}
            </div>

            {/* Categories */}
            {postData.categories?.nodes?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                    {postData.categories.nodes.map((cat) => (
                        <span
                            key={cat.slug}
                            className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full"
                        >
                            {cat.name}
                        </span>
                    ))}
                </div>
            )}

            {/* Content */}
            <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.content }}
            />
        </article>
    );
}
