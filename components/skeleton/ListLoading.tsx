const ListLoading = ({ items, count }: { items: any[]; count: number }) => {
  items = items || Array.from({ length: count })
  return (
    <div className="divide-y divide-slate-100 dark:divide-slate-700">
      {items.map((_item, i) => (
        <div className="p-4 mx-auto w-full" key={i}>
          <div className="flex items-center space-x-4 animate-pulse">
            <div className="flex flex-none items-center space-x-2">
              <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-500"></div>
              <div className="w-5 h-5 rounded bg-slate-200 dark:bg-slate-500"></div>
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-500"></div>
            </div>
            <div className="flex-1 h-2 bg-slate-200 dark:bg-slate-500"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListLoading
