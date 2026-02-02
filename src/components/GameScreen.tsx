import { useState } from 'react'
import type { Player, WordPair } from '../types/game'

interface GameScreenProps {
  players: Player[]
  currentWord: WordPair
  onEliminatePlayer: (playerId: string) => void
}

export function GameScreen({
  players,
  currentWord,
  onEliminatePlayer,
}: GameScreenProps) {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)
  const [eliminatedPlayer, setEliminatedPlayer] = useState<Player | null>(null)

  const alivePlayers = players.filter((p) => p.isAlive)
  const deadPlayers = players.filter((p) => !p.isAlive)

  const handlePlayerClick = (player: Player) => {
    if (player.isAlive && !eliminatedPlayer) {
      setSelectedPlayer(player)
    }
  }

  const handleConfirmElimination = () => {
    if (selectedPlayer) {
      setEliminatedPlayer(selectedPlayer)
      onEliminatePlayer(selectedPlayer.id)
      setSelectedPlayer(null)
    }
  }

  const handleContinue = () => {
    setEliminatedPlayer(null)
  }

  return (
    <div className="flex-1 flex flex-col p-4 max-w-md mx-auto w-full">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white mb-1">Debate</h1>
        <p className="text-gray-400 text-sm">
          Habla sobre tu palabra sin decirla. Encuentra al impostor.
        </p>
        <p className="text-gray-500 text-xs mt-1">
          Categoria: {currentWord.category}
        </p>
      </div>

      {/* Jugadores vivos */}
      <div className="mb-4">
        <h2 className="text-white text-sm font-medium mb-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          Vivos ({alivePlayers.length})
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {alivePlayers.map((player) => (
            <button
              key={player.id}
              onClick={() => handlePlayerClick(player)}
              disabled={!!eliminatedPlayer}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
            >
              {player.name}
            </button>
          ))}
        </div>
      </div>

      {/* Jugadores eliminados */}
      {deadPlayers.length > 0 && (
        <div className="mb-4">
          <h2 className="text-gray-500 text-sm font-medium mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500"></span>
            Eliminados ({deadPlayers.length})
          </h2>
          <div className="grid grid-cols-2 gap-2">
            {deadPlayers.map((player) => (
              <div
                key={player.id}
                className={`px-4 py-3 rounded-lg border text-sm ${
                  player.role === 'impostor'
                    ? 'bg-red-900/30 border-red-500/50 text-red-400'
                    : 'bg-blue-900/30 border-blue-500/50 text-blue-400'
                }`}
              >
                <span className="line-through opacity-70">{player.name}</span>
                <span className="ml-2 text-xs">
                  ({player.role === 'impostor' ? 'Impostor' : 'Civil'})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Estadisticas */}
      <div className="mt-auto mb-4">
        <div className="flex justify-center gap-6 text-sm">
          <div className="text-center">
            <p className="text-blue-400 font-bold text-xl">
              {alivePlayers.filter((p) => p.role === 'civilian').length}
            </p>
            <p className="text-gray-500 text-xs">Civiles vivos</p>
          </div>
          <div className="text-center">
            <p className="text-red-400 font-bold text-xl">
              {alivePlayers.filter((p) => p.role === 'impostor').length}
            </p>
            <p className="text-gray-500 text-xs">Impostores vivos</p>
          </div>
        </div>
      </div>

      <p className="text-gray-500 text-xs text-center">
        Pulsa en un jugador para votarlo
      </p>

      {/* Modal de confirmacion */}
      {selectedPlayer && !eliminatedPlayer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-900 rounded-2xl p-6 max-w-sm w-full border border-white/10">
            <h3 className="text-white text-xl font-bold text-center mb-2">
              Eliminar jugador
            </h3>
            <p className="text-gray-400 text-center mb-6">
              Estas seguro de que quieres eliminar a{' '}
              <span className="text-white font-medium">{selectedPlayer.name}</span>?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedPlayer(null)}
                className="flex-1 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleConfirmElimination}
                className="flex-1 py-3 rounded-lg bg-red-600 text-white font-medium hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de resultado de eliminacion */}
      {eliminatedPlayer && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <div
            className={`rounded-2xl p-6 max-w-sm w-full border ${
              eliminatedPlayer.role === 'impostor'
                ? 'bg-gradient-to-br from-red-900 to-red-800 border-red-500'
                : 'bg-gradient-to-br from-blue-900 to-blue-800 border-blue-500'
            }`}
          >
            <h3 className="text-white text-xl font-bold text-center mb-2">
              {eliminatedPlayer.name}
            </h3>
            <p
              className={`text-center text-2xl font-bold mb-4 ${
                eliminatedPlayer.role === 'impostor'
                  ? 'text-red-300'
                  : 'text-blue-300'
              }`}
            >
              Era {eliminatedPlayer.role === 'impostor' ? 'IMPOSTOR' : 'CIVIL'}
            </p>
            {eliminatedPlayer.role === 'impostor' ? (
              <p className="text-red-200 text-center text-sm mb-6">
                Habeis eliminado a un impostor!
              </p>
            ) : (
              <p className="text-blue-200 text-center text-sm mb-6">
                Era inocente...
              </p>
            )}
            <button
              onClick={handleContinue}
              className="w-full py-3 rounded-lg bg-white/20 text-white font-medium hover:bg-white/30 transition-colors"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
