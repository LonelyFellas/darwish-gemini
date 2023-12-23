import Link  from "next/Link"
export default function Home() {
  return (
      <main className="flex justify-center items-center min-h-screen ">
          <Link href="homepage" className="w-[60%] text-center -mt-40 cursor-pointer" >
              <h1 className="gradient-text text-[6vw] leading-[6vw]">
                  Welcome to Darwish-Gemini
              </h1>
          </Link>
      </main>
  )
}
