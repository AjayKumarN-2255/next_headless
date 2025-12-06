import Image from "next/image";

const Icons = [
  {
    name: "X",
    url: "https://x.com/raddy_dev",
    image: "/x.svg",
    alt: "Follow Raddy on X",
  },
  {
    name: "GitHub",
    url: "https://github.com/raddydev",
    image: "/github.svg",
    alt: "Follow Raddy on Github",
  },
];

export function SocialIcons() {
  return (
    <div className="mb-6 flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-3 md:mb-0">Social Media</h2>
      <div className="flex gap-4">
        {Icons.map((icon) => (
          <a
            key={icon.name}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 border border-gray-300 rounded-full hover:bg-gray-200 hover:scale-110 transition transform duration-200"
          >
            <Image
              src={icon.image}
              alt={icon.alt}
              width={20}
              height={20}
              loading="eager"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
