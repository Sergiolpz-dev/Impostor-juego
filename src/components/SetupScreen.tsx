import { useState } from 'react'
import type { GameConfig } from '../types/game'
import { getAllCategories } from '../data/words'

interface SetupScreenProps {
  onStartGame: (playerNames: string[], config: GameConfig) => void
  initialPlayerNames?: string[]
  initialCategory?: string
}

export function SetupScreen({
  onStartGame,
  initialPlayerNames = [],
  initialCategory = 'Todas'
}: SetupScreenProps) {
  const [playerNames, setPlayerNames] = useState<string[]>(initialPlayerNames)
  const [newPlayerName, setNewPlayerName] = useState('')
  const [impostorCount, setImpostorCount] = useState(1)
  const [showHintToImpostor, setShowHintToImpostor] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)

  const categories = getAllCategories()

  const addPlayer = () => {
    const trimmedName = newPlayerName.trim()
    if (trimmedName && !playerNames.includes(trimmedName)) {
      setPlayerNames([...playerNames, trimmedName])
      setNewPlayerName('')
    }
  }

  const removePlayer = (index: number) => {
    setPlayerNames(playerNames.filter((_, i) => i !== index))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addPlayer()
    }
  }

  const canStartGame = playerNames.length >= 3 && impostorCount < playerNames.length

  const handleStartGame = () => {
    if (canStartGame) {
      onStartGame(playerNames, {
        impostorCount,
        showHintToImpostor,
        category: selectedCategory === 'Todas' ? undefined : selectedCategory
      })
    }
  }

  const maxImpostors = Math.max(1, playerNames.length - 1)

  return (
    <div className="flex-1 flex flex-col p-4 max-w-md mx-auto w-full overflow-hidden">
      <h1 className="text-3xl font-bold text-center text-white mb-2">
        El Impostor
      </h1>
      <p className="text-gray-400 text-center mb-6 text-sm">
        Configura la partida
      </p>

      {/* Añadir jugadores */}
      <div className="mb-6">
        <label className="block text-white text-sm font-medium mb-2">
          Jugadores ({playerNames.length})
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={newPlayerName}
            onChange={(e) => setNewPlayerName(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Nombre del jugador"
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            maxLength={20}
          />
          <button
            onClick={addPlayer}
            disabled={!newPlayerName.trim()}
            className="px-4 py-3 rounded-lg bg-blue-600 text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Lista de jugadores */}
      {playerNames.length > 0 && (
        <div className="mb-6 max-h-48 overflow-y-auto">
          <div className="space-y-2">
            {playerNames.map((name, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-4 py-2 rounded-lg bg-white/10 border border-white/20"
              >
                <span className="text-white">{name}</span>
                <button
                  onClick={() => removePlayer(index)}
                  className="text-red-400 hover:text-red-300 transition-colors p-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {playerNames.length < 3 && (
        <p className="text-yellow-400 text-sm mb-4 text-center">
          Necesitas al menos 3 jugadores
        </p>
      )}

      {/* Configuracion */}
      <div className="space-y-4 mb-6">
        {/* Numero de impostores */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Numero de impostores
          </label>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setImpostorCount(Math.max(1, impostorCount - 1))}
              disabled={impostorCount <= 1}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white text-2xl font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
            >
              -
            </button>
            <span className="text-white text-3xl font-bold w-12 text-center">
              {Math.min(impostorCount, maxImpostors)}
            </span>
            <button
              onClick={() => setImpostorCount(Math.min(maxImpostors, impostorCount + 1))}
              disabled={impostorCount >= maxImpostors}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white text-2xl font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white/20 transition-colors"
            >
              +
            </button>
          </div>
          <p className="text-gray-500 text-xs text-center mt-2">
            Max: {maxImpostors} (siempre menos que jugadores)
          </p>
        </div>

        {/* Mostrar pista */}
        <div
          className="flex items-center justify-between p-3 rounded-lg bg-white/5 cursor-pointer hover:bg-white/10 transition-colors"
          onClick={() => setShowHintToImpostor(!showHintToImpostor)}
        >
          <div>
            <p className="text-white text-sm font-medium">
              Pista para el impostor
            </p>
            <p className="text-gray-400 text-xs">
              {showHintToImpostor
                ? 'El impostor vera una pista'
                : 'Sin pista, mas dificil'}
            </p>
          </div>
          <div
            className={`relative w-14 h-8 rounded-full transition-colors shrink-0 ${
              showHintToImpostor ? 'bg-green-500' : 'bg-gray-600'
            }`}
          >
            <div
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-200 ${
                showHintToImpostor ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </div>
        </div>

        {/* Selector de categoria */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Categoria de palabras
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500 appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
              backgroundPosition: 'right 0.5rem center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '2.5rem'
            }}
          >
            {categories.map((category) => (
              <option key={category} value={category} className="bg-gray-800">
                {category}
              </option>
            ))}
          </select>
          <p className="text-gray-400 text-xs mt-1">
            {selectedCategory === 'Todas'
              ? 'Palabras de todas las categorias'
              : `Solo palabras de ${selectedCategory}`}
          </p>
        </div>
      </div>

      {/* Boton empezar */}
      <button
        onClick={handleStartGame}
        disabled={!canStartGame}
        className="w-full py-4 rounded-lg bg-linear-to-r from-purple-600 to-pink-600 text-white font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all mt-auto"
      >
        Empezar Partida
      </button>

      {canStartGame && (
        <p className="text-gray-400 text-xs text-center mt-2">
          {playerNames.length} jugadores, {impostorCount} impostor{impostorCount > 1 ? 'es' : ''}
        </p>
      )}
    </div>
  )
}
