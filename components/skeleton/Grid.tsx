const Grid = ({ items, count = 6 }: { items: any[]; count: number }) => {
  items = items || Array.from({ length: count })

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((_item, i) => (
        <div className="p-6 h-full bg-white rounded-md shadow-base dark:bg-slate-700" key={i}>
          <div className="animate-pulse">
            <header className="flex justify-between items-center space-x-6">
              <div className="flex flex-1 items-center space-x-4">
                <div className="flex flex-none items-center space-x-2">
                  <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-500"></div>
                </div>
                <div className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-500"></div>
              </div>
              <div className="flex-none">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-500"></div>
              </div>
            </header>
            <div className="py-6 space-y-2">
              <div className="h-1.5 bg-slate-200 dark:bg-slate-500"></div>
              <div className="h-1.5 bg-slate-200 dark:bg-slate-500"></div>
              <div className="h-1.5 bg-slate-200 dark:bg-slate-500"></div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <span className="block h-[4px] bg-slate-200 dark:bg-slate-500"></span>
                <span className="block h-[4px] bg-slate-200 dark:bg-slate-500"></span>
              </div>

              <div className="space-y-2">
                <span className="block h-[4px] bg-slate-200 dark:bg-slate-500"></span>
                <span className="block h-[4px] bg-slate-200 dark:bg-slate-500"></span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-6">
              <div className="flex -space-x-1">
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-500"></div>
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-500"></div>
                <div className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-500"></div>
              </div>
              <div>
                <span className="inline-block rounded-full h-[18px] w-[130px] bg-slate-200 dark:bg-slate-500"></span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Grid
