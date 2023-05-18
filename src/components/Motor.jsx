const Motor = ({ motor }) => {
  return (
    <div className="motor">
      <h1></h1>
      <div id="info">
        <img src={motor.picture} alt={motor.motorName} id="picture" />
        <h1>{motor.motorName}</h1>
        <h3>
          Horsepower: {motor.horsePower} || Torque: {motor.torque}
        </h3>

        <h3>Displacement: {motor.totalDisplacement}</h3>
        <h3>Pattern: {motor.layout}</h3>
        <h3>Boosted?: {motor.forcedInduction}</h3>
      </div>
    </div>
  )
}

export default Motor
