import { useState, useRef } from 'react'
import type { Player, WordPair, GameConfig } from '../types/game'

interface RoleRevealScreenProps {
  players: Player[]
  currentPlayerIndex: number
  currentWord: WordPair
  config: GameConfig
  onPlayerSawRole: (playerIndex: number) => void
  onAllPlayersSawRoles: () => void
  onAbandonGame: () => void
}

export function RoleRevealScreen({
  players,
  currentPlayerIndex,
  currentWord,
  config,
  onPlayerSawRole,
  onAllPlayersSawRoles,
  onAbandonGame,
}: RoleRevealScreenProps) {
  const [isRevealing, setIsRevealing] = useState(false)
  const [hasSeenRole, setHasSeenRole] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const currentPlayer = players[currentPlayerIndex]
  const isLastPlayer = currentPlayerIndex === players.length - 1

  const handlePressStart = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault()
    timerRef.current = setTimeout(() => {
      setIsRevealing(true)
    }, 300)
  }

  const handlePressEnd = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault()
    if (timerRef.current) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }
    if (isRevealing) {
      setIsRevealing(false)
      setHasSeenRole(true)
    }
  }

  const handleNext = () => {
    onPlayerSawRole(currentPlayerIndex)
    setHasSeenRole(false)

    if (isLastPlayer) {
      onAllPlayersSawRoles()
    }
  }

  const getRoleContent = () => {
    if (currentPlayer.role === 'civilian') {
      return {
        roleText: 'Eres CIVIL',
        roleColor: 'text-blue-400',
        bgColor: 'from-blue-900/50 to-blue-800/50',
        borderColor: 'border-blue-500',
        content: currentWord.word,
        label: 'Tu palabra es:',
      }
    } else {
      return {
        roleText: 'Eres IMPOSTOR',
        roleColor: 'text-red-400',
        bgColor: 'from-red-900/50 to-red-800/50',
        borderColor: 'border-red-500',
        content: config.showHintToImpostor ? currentWord.hint : null,
        label: config.showHintToImpostor ? 'Tu pista es:' : null,
      }
    }
  }

  const roleContent = getRoleContent()

  return (
    <div className="flex-1 flex flex-col p-4 max-w-md mx-auto w-full">
      {/* Boton abandonar */}
      <button
        onClick={onAbandonGame}
        className="absolute top-4 right-4 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white text-sm hover:bg-red-500/20 hover:border-red-500/50 transition-colors"
      >
        ✕ Abandonar
      </button>

      <div className="text-center mb-4">
        <p className="text-gray-400 text-sm">
          Jugador {currentPlayerIndex + 1} de {players.length}
        </p>
        <div className="flex justify-center gap-1 mt-2">
          {players.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${i < currentPlayerIndex
                  ? 'bg-green-500'
                  : i === currentPlayerIndex
                    ? 'bg-white'
                    : 'bg-white/30'
                }`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-white mb-8">
          {currentPlayer.name}
        </h2>

        {!hasSeenRole ? (
          <>
            <div
              className={`no-context-menu w-48 h-48 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${isRevealing
                  ? `bg-linear-to-br ${roleContent.bgColor} ${roleContent.borderColor}`
                  : 'bg-white/10 border-white/30'
                }`}
              onMouseDown={handlePressStart}
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressEnd}
              onTouchStart={handlePressStart}
              onTouchEnd={handlePressEnd}
              onTouchCancel={handlePressEnd}
              onContextMenu={(e) => e.preventDefault()}
            >
              {isRevealing ? (
                <div className="text-center p-4">
                  <p className={`text-lg font-bold ${roleContent.roleColor} mb-2`}>
                    {roleContent.roleText}
                  </p>
                  {roleContent.label && (
                    <>
                      <p className="text-gray-400 text-xs">{roleContent.label}</p>
                      <p className="text-white text-xl font-bold mt-1">
                        {roleContent.content}
                      </p>
                    </>
                  )}
                </div>
              ) : (
                <div className="text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-white/50 mx-auto mb-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <p className="text-white/50 text-sm">Manten pulsado</p>
                </div>
              )}
            </div>

            <p className="text-gray-400 text-sm mt-6 text-center">
              Manten pulsado el circulo para ver tu rol.
              <br />
              <span className="text-yellow-400">Sueltalo cuando termines de leer.</span>
            </p>
          </>
        ) : (
          <>
            <div className="w-48 h-48 rounded-full flex items-center justify-center bg-green-500/20 border-4 border-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-20 w-20 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-green-400 text-lg font-medium mt-6">
              Has visto tu rol
            </p>
          </>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={!hasSeenRole}
        className="w-full py-4 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg disabled:opacity-30 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all mt-4"
      >
        {isLastPlayer ? 'Empezar Partida' : 'Siguiente Jugador'}
      </button>

      {!hasSeenRole && (
        <p className="text-gray-500 text-xs text-center mt-2">
          Debes ver tu rol antes de continuar
        </p>
      )}
    </div>
  )
}
