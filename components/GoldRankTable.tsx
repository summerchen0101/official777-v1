function GoldRankTable() {
  return (
    <table className="w-full text-gray-500 shadow">
      <thead>
        <tr>
          <th className="w-1/3 text-center">名次</th>
          <th>暱稱</th>
          <th className="w-1/3">金幣</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((t, i) => (
          <tr key={i}>
            <td className="text-center">{i + 1}</td>
            <td>Summer</td>
            <td>$4,500</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default GoldRankTable
