import React from 'react';

export default async function SinglePost({ params }) {
    const { slug } = await params;

    return (
        <div>{slug}</div>
    );
}
