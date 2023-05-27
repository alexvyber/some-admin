const SkeletionTable = ({ items, count }: { items: any[]; count: number }) => {
  items = items || Array.from({ length: count })

  return (
    <div className="p-6 w-full bg-white rounded-md shadow-base dark:bg-slate-700">
      <table className="w-full border-separate table-fixed animate-pulse border-spacing-4">
        <thead>
          <tr>
            <th scope="col">
              <div className="h-4 bg-slate-200 dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-slate-200 dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-slate-200 dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-slate-200 dark:bg-slate-500"></div>
            </th>
            <th scope="col">
              <div className="h-4 bg-slate-200 dark:bg-slate-500"></div>
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {items.map((_item, i) => (
            <tr key={i}>
              <td>
                <div className="h-2 bg-slate-200 dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-slate-200 dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-slate-200 dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-slate-200 dark:bg-slate-500"></div>
              </td>
              <td>
                <div className="h-2 bg-slate-200 dark:bg-slate-500"></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SkeletionTable
