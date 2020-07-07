import React from 'react'
import NPSScale from './components/NPSScale'
import styles from './styles.module.css'
type Props = {
  animated?: boolean
  dismissed?: boolean
  score?: number | null
  question?: string
  thanksMessage?: string
  scaleWorstLabel?: string
  scaleBestLabel?: string
  onSubmit?: (score: number) => void
  onDismissed?: () => void
}
export function NPS({
  animated = true,
  question = `How likely are you to recommend us to your friends and colleagues?`,
  thanksMessage = `Thank you for your feedback!`,
  dismissed,
  score = null,
  scaleWorstLabel,
  scaleBestLabel,
  onSubmit,
  onDismissed
}: Props) {
  const handleDismiss = () => {
    onDismissed && onDismissed()
  }
  const handleSubmit = (score: number) => {
    onSubmit && onSubmit(score)
  }

  return dismissed ? null : (
    <div className={`${styles.root} ${animated ? styles.animated : ''}`}>
      <button className={styles.close} onClick={handleDismiss}>
        ✕
      </button>

      {score ? (
        <div className={styles.inner}>{thanksMessage}</div>
      ) : (
        <div className={styles.inner}>
          <p className={styles.message}>{question}</p>
          <NPSScale
            worstLabel={scaleWorstLabel}
            bestLabel={scaleBestLabel}
            score={score}
            onSubmit={handleSubmit}
          />
        </div>
      )}
    </div>
  )
}
