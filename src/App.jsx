import './App.css'
import motors from './motors.json'
import Motor from './components/Motor'

const App = () => {
  return (
    <div className="App">
      <h1>My project</h1>
      <div className="oblock">
        <main>
          {motors.engines.map((motor) => (
            <Motor key={motor.motorName} motor={motor} />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
