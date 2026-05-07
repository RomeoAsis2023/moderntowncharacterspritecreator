import React from 'react'

import createPreview from '../util/createPreview'
import SpriteSheetPreview from './SpriteSheetPreview'
import Dimmer from './Dimmer'
import Button from './Button'
import TetrominoLoader from './TetrominoLoader'

export default function CharacterPreview ({ characterSettings, settingsString }) {
  const canvas = React.useRef(null)
  const [spriteSheet, setSpriteSheet] = React.useState(null)
  const [loading, setLoading] = React.useState(false)
  const isHidden = React.useMemo(() => !characterSettings, [characterSettings])

  React.useEffect(() => {
    const canvasElement = canvas.current
    if (!canvasElement || !characterSettings) {
      return
    }

    setLoading(true)
    const { base, ...settings } = characterSettings
    createPreview(canvasElement, base, settings).then((newSpriteSheet) => {
      setSpriteSheet(newSpriteSheet)
      setLoading(false)
    })
  }, [characterSettings])

  return (
    <div className="character-preview">
      <SpriteSheetPreview spriteSheet={spriteSheet} loading={loading}/>
      <div className="canvascontainer">
        <canvas
          ref={canvas}
          className="canvas"
          width={32 * 3}
          height={32 * 4}
        />
        {loading && <Dimmer><TetrominoLoader size="sm"/></Dimmer>}
      </div>
      <div className="actions">
        <Button
          Component="a"
          download="sprite-sheet.png"
          className="download"
          href={spriteSheet}
        >
          Download
        </Button>
      </div>
      <style jsx>{`
        .character-preview {
          position: fixed;
          top: 0;
          left: 0;
          display: ${isHidden ? 'none' : 'flex'};
          flex-direction: column;
          align-items: center;
          width: 160px;
          padding: 32px 0;
        }

        .character-preview .canvascontainer {
          position: relative;
        }

        .character-preview .canvas {
          background: #fff;
          border-radius: 4px;
          padding: 4px;
        }

        .character-preview .actions {
          margin-top: 24px;
        }

        :global(.download) {
          position: relative;
          min-width: 110.36px;
          min-height: 32px;
        }

        @media (max-width: 600px) {
          .character-preview {
            top: unset;
            bottom: 0;
          }

          .character-preview .canvascontainer {
            display: none;
          }

          .character-preview .actions {
            margin-top: 0;
          }
        }
      `}</style>
    </div>
  )
}
