import { RandomSetCard, SetDeckCard, SetGameReact } from 'set-game'
import 'set-game/styles.css'
import './App.css'

function App() {
  return (
    <div className="app">
      <SetGameReact />

      {/* Example of deck cards */}
      <div style={{ padding: '40px', background: '#f0f0f0' }}>
        <h2>Deck Card Examples</h2>
        <div className="set-game" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
          <SetDeckCard cardId={0} faceUp={true} />
          <SetDeckCard cardId={15} faceUp={true} />
          <SetDeckCard cardId={42} faceUp={true} selected={true} />
          <SetDeckCard cardId={80} faceUp={false} />
        </div>
      </div>

      {/* Example of random cards */}
      <div style={{ padding: '40px', background: '#e0e0e0' }}>
        <h2>Random Card Examples</h2>
        <div className="set-game" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
          <RandomSetCard />
          <RandomSetCard />
          <RandomSetCard />
          <RandomSetCard selected={true} />
          <RandomSetCard faceUp={false} />
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          Each card is randomly generated. Refresh to see different cards!
        </p>
      </div>

      {/* Example of seeded random cards */}
      <div style={{ padding: '40px', background: '#d0d0d0' }}>
        <h2>Seeded Random Card Examples (Reproducible)</h2>
        <div className="set-game" style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
          <RandomSetCard seed={1} />
          <RandomSetCard seed={2} />
          <RandomSetCard seed={3} />
          <RandomSetCard seed={4} />
          <RandomSetCard seed={5} />
        </div>
        <p style={{ textAlign: 'center', marginTop: '20px' }}>
          These cards use seeds (1-5) so they're always the same. Refresh to verify!
        </p>
      </div>
    </div>
  )
}

export default App

