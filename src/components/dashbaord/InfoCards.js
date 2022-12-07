import InfoCard from "./InfoCard"

const InfoCards = () => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 my-3">
          <InfoCard title="Total Sells" count="$3799.00" />
          <InfoCard title="Average order value" count="$3799.00" />
          <InfoCard title="Total orders" count="678" />
    </div>
  )
}

export default InfoCards