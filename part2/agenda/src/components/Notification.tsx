import React from 'react'

export interface NotificationProps {
    message: string | null;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
    if (message === null) {
        return null
    }

    return (
        <div className="notification">
            {message}
        </div>
    )
}

export default Notification