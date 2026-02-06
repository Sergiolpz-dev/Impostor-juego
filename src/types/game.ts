export type GamePhase = 'setup' | 'roleReveal' | 'playing' | 'ended'

export type Role = 'civilian' | 'impostor'

export interface Player {
  id: string
  name: string
  role: Role
  isAlive: boolean
  hasSeenRole: boolean
}

export interface WordPair {
  word: string
  hint: string
  category: string
}

export interface GameConfig {
  impostorCount: number
  showHintToImpostor: boolean
  category?: string
}

export interface GameState {
  phase: GamePhase
  players: Player[]
  config: GameConfig
  currentWord: WordPair | null
  currentPlayerIndex: number
  winner: 'civilians' | 'impostors' | null
}

export const initialGameState: GameState = {
  phase: 'setup',
  players: [],
  config: {
    impostorCount: 1,
    showHintToImpostor: true,
  },
  currentWord: null,
  currentPlayerIndex: 0,
  winner: null,
}
