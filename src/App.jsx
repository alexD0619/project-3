import './App.css'
import motors from './motors.json'
import Motor from './components/Motor'
import SideBar from './components/SideBar'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <div className="head">
        <Header />
      </div>
      <div class="flex-container">
        <div className="side">
          <SideBar />
        </div>
        <div className="emap">
          <main>
            {motors.engines.map((motor) => (
              <Motor key={motor.motorName} motor={motor} />
            ))}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
