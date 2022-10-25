import { useState, useEffect } from 'react'
import './estilo.css'

function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])

    return (
        <>
            {visible && (
                <div className={`message ${type}`}>
                    {msg}
                </div>
            )}
        </>
    )
}

export default Message