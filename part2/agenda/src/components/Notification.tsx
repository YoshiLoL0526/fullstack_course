import React from 'react'

export type NotificationType = 'success' | 'error'

export interface NotificationMessage {
    message: string | null;
    type?: NotificationType;
}

export interface NotificationProps {
    notification: NotificationMessage;
}

const Notification: React.FC<NotificationProps> = ({ notification }) => {
    if (notification.message === null) {
        return null
    }

    return (
        <div className={`notification ${notification.type === 'error' ? 'error' : 'success'}`}>
            {notification.message}
        </div>
    )
}

export default Notification