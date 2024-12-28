import React, {useState} from 'react';
import classNames from 'classnames';

export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
    title: string;
    description?: string; 
    type?: AlertType;
    onClose?: () => void;
    closable?: boolean;
}

export const Alert: React.FC<AlertProps> = (props) => {
    const [ hide, setHide ] = useState(false);
    const {
        title,
        description,
        type,
        onClose,
        closable
    } = props;
    const classes = classNames('clu-alert', {
        [`clu-alert-${type}`]: type,
    });
    const titleClass = classNames('clu-alert-title', {
        'bold-title': description
    });
    const handleClose = (e: React.MouseEvent) => {
        if (onClose) {
            onClose();
        }
        setHide(true);
    };
    return (
        <div className={classes}>
            <span className={titleClass}>{title}</span>
            {description && <p className='clu-alert-desc'>{description}</p>}
            {closable && <span className='clu-alert-close' onClick={handleClose}></span>}
        </div>
    );
}

Alert.defaultProps = {
    type: 'default',
    closable: true,
}

export default Alert;