import React from "react";

export default function About() {
    return (
        <section className="max-w-4xl mx-auto p-6 mt-10">
            <h1 className="text-3xl font-bold mb-6">About Us</h1>
            <p className="mb-4">
                Welcome to our website! We use <strong>Next.js</strong> for building fast and
                scalable React applications with server-side rendering and static generation.
            </p>
            <p className="mb-4">
                Our backend is powered by <strong>WordPress</strong>, leveraging its GraphQL API to
                provide structured content efficiently. This allows our frontend to fetch data
                seamlessly and render it dynamically.
            </p>
            <p className="mb-4">
                With this setup, we combine the flexibility of WordPress as a CMS with the
                performance and modern features of Next.js, creating a robust and maintainable
                web experience.
            </p>
            <p className="mb-4">
                Our goal is to deliver fast, SEO-friendly, and interactive pages for our users
                while keeping content management simple and intuitive.
            </p>
        </section>
    );
}
