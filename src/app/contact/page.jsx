import React from "react";

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="mb-4">
        We&rsquo;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </p>

      <div className="space-y-4">
        <p>
          <strong>Email:</strong> <a href="mailto:info@example.com" className="text-blue-600 hover:underline">info@example.com</a>
        </p>
        <p>
          <strong>Phone:</strong> <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a>
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, Your City, Your Country
        </p>
      </div>
    </section>
  );
}
