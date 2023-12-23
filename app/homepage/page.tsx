export default function homepage() {
    return (
        <main className="relative z-0 flex h-screen w-full overflow-hidden md:flex-row sm:flex-col">
            <div className="h-[200px]">前端</div>
            <div className="dark flex-shrink-0 overflow-x-hidden bg-black0 h-full bg-red-400">
                <div className="h-full w-[260px]">
                    <div className="flex h-full min-h-0 flex-col">
                        <div className="scrollbar-trigger relative h-full w-full flex-1 items-start border-white/20">

                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-amber-400">right</div>
        </main>
    )
}
