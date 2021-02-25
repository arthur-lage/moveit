import { useState, useEffect, useContext } from "react"
import { ChallengesContext, ChallengesProvider } from "../contexts/ChallengesContext";
import styles from "../styles/components/Countdown.module.css"
import { CountdownContext } from "../contexts/CountdownContext";

export function Countdown(){

    const { minutes, 
        seconds,
         isActive,
          hasFinished,
           startCountdown,
            resetCountdown
         } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

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