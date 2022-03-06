import React, { useEffect, useState } from 'react'

import { Wrapper, Play, Pause, Previous } from './style.jsx'
import PlayButton from './playerAssets/play1.svg'
import PauseButton from './playerAssets/pause.svg'
import PreviousButton from './playerAssets/previous.svg'
import NextButton from './playerAssets/next.svg'

export const AudioPlayer = (props) => {
    console.log(props)
    const [audioPlayer, setAudioPlayer] = useState('')
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [canPlay, setCanPlay] = useState(false)
    const [songRestart, setSongRestart] = useState(false)
    const [playhead, setPlayhead] = useState(0)

    useEffect(() => {
        const player = document.getElementById('audio')
        setAudioPlayer(player)
        setDuration(player.duration)

        player.addEventListener('canplaythrough', (event) => {
            setCanPlay(true)
        })

        player.addEventListener('timeupdate', (event) => {
            setPlayhead(
                (
                    (player.currentTime.toFixed(2) / player.duration) *
                    100
                ).toFixed(2)
            )
        })

        if (isPlaying && canPlay) {
            player.play()
        } else {
            player.pause()
        }

        if (songRestart) {
            playerRestart()
            setSongRestart(false)
        }

        function playerRestart() {
            player.currentTime = 0
            setPlayhead(0)
        }
    }, [isPlaying, canPlay, songRestart])

    return (
        <Wrapper>
            <div className="info">
                <h3>{props.name}</h3>
                <h5>Blink-183</h5>
            </div>
            <div className="controls">
                <Previous>
                    <PreviousButton onClick={() => setSongRestart(true)} />
                </Previous>
                <div className="play-pause">
                    {isPlaying ? (
                        <Pause onClick={() => setIsPlaying(false)}>
                            <PauseButton />
                        </Pause>
                    ) : (
                        <Play>
                            <PlayButton
                                ready={canPlay}
                                onClick={() => setIsPlaying(true)}
                            />
                        </Play>
                    )}
                </div>
                <div className="player">
                    <input
                        type="range"
                        id="seek-slider"
                        max={duration ? duration : 100}
                        value={playhead}
                        onChange={(e) => setPlayhead(e.target.value)}
                        onMouseUp={() =>
                            (audioPlayer.currentTime = (playhead * 1).toFixed())
                        }
                    />
                </div>
            </div>
            <div>
                <div className="time">
                    {audioPlayer && (
                        <span className="small-text">
                            {audioPlayer.currentTime.toFixed()} /{' '}
                            {duration.toFixed()}
                        </span>
                    )}
                </div>

                <audio id="audio" src={props.music} type="audio/mp3" />
            </div>
        </Wrapper>
    )
}
