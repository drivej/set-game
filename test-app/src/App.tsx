import { SetCardStandalone, SetGameReact } from 'set-game'
import 'set-game/styles.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <SetGameReact />

      {/* Example of standalone cards */}
      <div style={{ padding: '40px', background: '#f0f0f0' }}>
        <h2>Standalone Card Examples</h2>
        <div className="set-game" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
          <SetCardStandalone
            shape="diamond"
            color="red"
            fill="solid"
            count={1}
            faceUp={true}
          />
          <SetCardStandalone
            shape="pill"
            color="green"
            fill="hatch"
            count={2}
            faceUp={true}
          />
          <SetCardStandalone
            shape="wiggle"
            color="purple"
            fill="empty"
            count={3}
            faceUp={true}
            selected={true}
          />
          <SetCardStandalone
            shape="diamond"
            color="red"
            fill="solid"
            count={1}
            faceUp={false}
          />
        </div>
      </div>
    </div>
  )
}

export default App

