const InfoCard = ({title, count}) => {
  return (
    <div className="bg-white shadow rounded-md space-y-5 p-5">
      <h2 className="text-sm text-gray-500">{ title }</h2>
      <h2 className="text-2xl text-center">{count}</h2>
      <h2 className="text-sm text-center text-gray-500">Compared to April 2021</h2>
    </div>
  )
}

export default InfoCard;