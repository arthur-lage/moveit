import { useState, useEffect, useContext } from "react"
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css"


let countdownTimeout: NodeJS.Timeout

export function Countdown(){

    const {startNewChallenge} = useContext(ChallengesContext)

    const [time, setTime] = useState(0.1 * 60);
    const [hasFinished, setHasFinished] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const minutes = Math.floor(time / 60);
    const seconds = (time % 60)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


    function startCountdown(){
        setIsActive(true)
    }

    function resetCountdown(){
        setIsActive(false)
        clearTimeout(countdownTimeout)
        setTime(25 * 60)
    }


    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0){
            setHasFinished(true)
            setIsActive(false)
            startNewChallenge()
        }
    }, [isActive, time])



    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <span>:</span>
                
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <div>
                    <button 
                        disabled
                        className={styles.countdownButton}
                        >Ciclo encerrado
                    </button>
                </div>
            ) : (
                <>
                { isActive ? (
                        <div>
                            <button 
                             type="button"
                             className={`${styles.countdownButton} ${styles.countDownButtonActive}`}
                             onClick={resetCountdown}
                             >Abandonar ciclo</button>
                        </div>
            ) : (
                    <div>
                        <button 
                        type="button"
                        className={styles.countdownButton}
                        onClick={startCountdown}
                        >Iníciar um ciclo</button>
                    </div>
            )}
                </>
            )}
        </div>
    )
}