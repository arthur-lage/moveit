import { createContext, useState, ReactNode } from 'react'
import challenges from '../../challenges.json'

export const ChallengesContext = createContext({} as ChallengesContextData)

interface Challenge{
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    levelUp: () => void ;
    startNewChallenge: () => void;
    resetChallenge: () => void;
    experienceToNextLevel: number;
}

interface ChallengesProviderProps{
    children: ReactNode
}

export function ChallengesProvider({ children }){

    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)
    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    function levelUp(){
        setLevel(level + 1)
    }
    
    function resetChallenge(){
        setActiveChallenge(null)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor( Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)
    }

    return(
        <ChallengesContext.Provider value={{ 
            level
            , levelUp
            , currentExperience
            , challengesCompleted
            , startNewChallenge
            , activeChallenge
            , resetChallenge
            , experienceToNextLevel}}>
            { children }
        </ChallengesContext.Provider>
    )
}
