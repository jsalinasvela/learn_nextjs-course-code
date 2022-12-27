import Link from "next/link"

function HomePage() {
  return (
    <div>
      Welcome to Next.js!
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </div>
  )
}

export default HomePage