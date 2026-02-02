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

  const startGame = useCallback((playerNames: string[], config: GameConfig) => {
    const word = getRandomWord()
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
    setGameState((prev) => ({
      ...prev,
      phase: 'playing',
    }))
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

  return (
    <div className="h-dvh flex flex-col overflow-hidden">
      {gameState.phase === 'setup' && (
        <SetupScreen
          onStartGame={startGame}
          initialPlayerNames={savedPlayerNames}
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
        />
      )}

      {gameState.phase === 'playing' && gameState.currentWord && (
        <GameScreen
          players={gameState.players}
          currentWord={gameState.currentWord}
          onEliminatePlayer={handleEliminatePlayer}
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
          />
        )}
    </div>
  )
}

export default App
