import { useState, useCallback } from 'react'
import type { GameState, GameConfig, Player } from './types/game'
import { initialGameState } from './types/game'
import { getRandomWord } from './data/words'
import { SetupScreen } from './components/SetupScreen'
import { RoleRevealScreen } from './components/RoleRevealScreen'
import { GameScreen } from './components/GameScreen'
import { EndGameScreen } from './components/EndGameScreen'

function App() {
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const [savedPlayerNames, setSavedPlayerNames] = useState<string[]>([])
  const [savedCategory, setSavedCategory] = useState<string>('Todas')

  const startGame = useCallback((playerNames: string[], config: GameConfig) => {
    // Guardar la categoría seleccionada
    setSavedCategory(config.category || 'Todas')
    const word = getRandomWord(config.category)
    setSavedPlayerNames(playerNames)

    // Crear array de indices y mezclarlo para asignar impostores
    const indices = playerNames.map((_, i) => i)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[indices[i], indices[j]] = [indices[j], indices[i]]
    }

    const impostorIndices = new Set(indices.slice(0, config.impostorCount))

    const players: Player[] = playerNames.map((name, index) => ({
      id: crypto.randomUUID(),
      name,
      role: impostorIndices.has(index) ? 'impostor' : 'civilian',
      isAlive: true,
      hasSeenRole: false,
    }))

    setGameState({
      phase: 'roleReveal',
      players,
      config,
      currentWord: word,
      currentPlayerIndex: 0,
      winner: null,
      startingPlayer: null,
    })
  }, [])

  const handlePlayerSawRole = useCallback((playerIndex: number) => {
    setGameState((prev) => ({
      ...prev,
      players: prev.players.map((p, i) =>
        i === playerIndex ? { ...p, hasSeenRole: true } : p
      ),
      currentPlayerIndex: playerIndex + 1,
    }))
  }, [])

  const handleAllPlayersSawRoles = useCallback(() => {
    setGameState((prev) => {
      // Seleccionar un jugador al azar para empezar
      const randomIndex = Math.floor(Math.random() * prev.players.length)
      const startingPlayerName = prev.players[randomIndex].name

      return {
        ...prev,
        phase: 'playing',
        startingPlayer: startingPlayerName,
      }
    })
  }, [])

  const checkWinCondition = useCallback(
    (players: Player[]): 'civilians' | 'impostors' | null => {
      const alivePlayers = players.filter((p) => p.isAlive)
      const aliveImpostors = alivePlayers.filter((p) => p.role === 'impostor')
      const aliveCivilians = alivePlayers.filter((p) => p.role === 'civilian')

      // Impostores ganan si igualan o superan a civiles
      if (aliveImpostors.length >= aliveCivilians.length) {
        return 'impostors'
      }

      // Civiles ganan si no quedan impostores
      if (aliveImpostors.length === 0) {
        return 'civilians'
      }

      return null
    },
    []
  )

  const handleEliminatePlayer = useCallback(
    (playerId: string) => {
      setGameState((prev) => {
        const updatedPlayers = prev.players.map((p) =>
          p.id === playerId ? { ...p, isAlive: false } : p
        )

        const winner = checkWinCondition(updatedPlayers)

        if (winner) {
          return {
            ...prev,
            players: updatedPlayers,
            phase: 'ended',
            winner,
          }
        }

        return {
          ...prev,
          players: updatedPlayers,
        }
      })
    },
    [checkWinCondition]
  )

  const handlePlayAgain = useCallback(() => {
    setGameState(initialGameState)
  }, [])

  const handleAbandonGame = useCallback(() => {
    setGameState(initialGameState)
  }, [])

  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      {gameState.phase === 'setup' && (
        <SetupScreen
          onStartGame={startGame}
          initialPlayerNames={savedPlayerNames}
          initialCategory={savedCategory}
        />
      )}

      {gameState.phase === 'roleReveal' && gameState.currentWord && (
        <RoleRevealScreen
          players={gameState.players}
          currentPlayerIndex={gameState.currentPlayerIndex}
          currentWord={gameState.currentWord}
          config={gameState.config}
          onPlayerSawRole={handlePlayerSawRole}
          onAllPlayersSawRoles={handleAllPlayersSawRoles}
          onAbandonGame={handleAbandonGame}
        />
      )}

      {gameState.phase === 'playing' && gameState.currentWord && (
        <GameScreen
          players={gameState.players}
          currentWord={gameState.currentWord}
          startingPlayer={gameState.startingPlayer}
          onEliminatePlayer={handleEliminatePlayer}
          onAbandonGame={handleAbandonGame}
        />
      )}

      {gameState.phase === 'ended' &&
        gameState.winner &&
        gameState.currentWord && (
          <EndGameScreen
            winner={gameState.winner}
            players={gameState.players}
            currentWord={gameState.currentWord}
            onPlayAgain={handlePlayAgain}
            onAbandonGame={handleAbandonGame}
          />
        )}
    </div>
  )
}

export default App
