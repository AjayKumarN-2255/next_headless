import Link from "next/link"

function Categories({ categories }) {
  return (
    <div className='mb-8'>
      <div className='flex text-sm flex-wrap gap-2 uppercase'>
        {
          categories?.map((cat) => (
            <div key={cat.id} className='flex'>
              <Link href={`/blog?categories=${cat.slug}`}
                className="border border-gray-200 p-1 rounded-md hover:underline"
              >
                {cat.name}
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Categories