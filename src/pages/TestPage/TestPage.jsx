import React, { useEffect } from 'react'

export function TestPage(props) {
    useEffect(() => {
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true

        var pusher = new Pusher('9d9b77208a503981532e', {
            cluster: 'us2',
        })

        var channel = pusher.subscribe('my-channel')
        channel.bind('my-event', function (data) {
            console.log(JSON.stringify(data))
        })
    }, [])

    return (
        <>
            <h1 css={'color:#fff'}>Pusher Test</h1>
            <p css={'color:#fff'}>
                Try publishing an event to channel <code>my-channel</code>
                with event name <code>my-event</code>.
            </p>
        </>
    )
}
