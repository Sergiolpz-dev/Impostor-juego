import type { Player, WordPair } from '../types/game'

interface EndGameScreenProps {
  winner: 'civilians' | 'impostors'
  players: Player[]
  currentWord: WordPair
  onPlayAgain: () => void
  onAbandonGame: () => void
}

export function EndGameScreen({
  winner,
  players,
  currentWord,
  onPlayAgain,
  onAbandonGame,
}: EndGameScreenProps) {
  const impostors = players.filter((p) => p.role === 'impostor')
  const civilians = players.filter((p) => p.role === 'civilian')

  const civilsWon = winner === 'civilians'

  return (
    <div className="flex-1 flex flex-col p-4 max-w-md mx-auto w-full">
      {/* Boton abandonar */}
      <button
        onClick={onAbandonGame}
        className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-red-500/20 hover:border-red-500/50 transition-colors"
      >
        ✕ Abandonar
      </button>

      {/* Resultado */}
      <div
        className={`flex-1 flex flex-col items-center justify-center rounded-2xl p-6 mb-4 ${
          civilsWon
            ? 'bg-linear-to-br from-blue-900/50 to-blue-800/50 border border-blue-500/50'
            : 'bg-linear-to-br from-red-900/50 to-red-800/50 border border-red-500/50'
        }`}
      >
        <div
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${
            civilsWon ? 'bg-blue-500/30' : 'bg-red-500/30'
          }`}
        >
          {civilsWon ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          )}
        </div>

        <h1
          className={`text-3xl font-bold text-center mb-2 ${
            civilsWon ? 'text-blue-400' : 'text-red-400'
          }`}
        >
          {civilsWon ? 'Victoria Civil!' : 'Victoria Impostor!'}
        </h1>

        <p className="text-gray-300 text-center mb-6">
          {civilsWon
            ? 'Los civiles han eliminado a todos los impostores'
            : 'Los impostores han igualado en numero a los civiles'}
        </p>

        {/* Palabra */}
        <div className="bg-black/30 rounded-xl p-4 w-full mb-6">
          <p className="text-gray-400 text-sm text-center">La palabra era:</p>
          <p className="text-white text-2xl font-bold text-center">
            {currentWord.word}
          </p>
          <p className="text-gray-500 text-xs text-center mt-1">
            Pista: {currentWord.hint}
          </p>
        </div>

        {/* Impostores */}
        <div className="w-full mb-4">
          <p className="text-red-400 text-sm font-medium mb-2">
            Impostores ({impostors.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {impostors.map((p) => (
              <span
                key={p.id}
                className={`px-3 py-1 rounded-full text-sm ${
                  p.isAlive
                    ? 'bg-red-500/30 text-red-300 border border-red-500/50'
                    : 'bg-red-900/30 text-red-500 border border-red-900/50 line-through'
                }`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>

        {/* Civiles */}
        <div className="w-full">
          <p className="text-blue-400 text-sm font-medium mb-2">
            Civiles ({civilians.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {civilians.map((p) => (
              <span
                key={p.id}
                className={`px-3 py-1 rounded-full text-sm ${
                  p.isAlive
                    ? 'bg-blue-500/30 text-blue-300 border border-blue-500/50'
                    : 'bg-blue-900/30 text-blue-500 border border-blue-900/50 line-through'
                }`}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Boton jugar de nuevo */}
      <button
        onClick={onPlayAgain}
        className="w-full py-4 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all"
      >
        Jugar de Nuevo
      </button>
    </div>
  )
}
