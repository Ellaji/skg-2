import * as React from 'react'
import IconSprite from './IconSprite'

export interface IconProps {
    name: string;
    url?: string;
    target?: string;
    srName?: string;
    inCircle?: boolean;
    className?: string;
    onClick?: any;
}

const Icon = ({url, srName, inCircle, name, target, className, onClick} : IconProps) => {
    let iconClass = `a-icon a-icon--svg ${inCircle ? 'a-icon--circle a-icon--center-icon' : ''} a-icon--${name} ${className}`

    return (
        url ? 
            <a href={url} target={target} className={iconClass} onClick={onClick}>
                <IconSprite name={name} />
                {srName && <span className="sr-only">{srName}</span>}
            </a>        
        : 
            <span className={iconClass} onClick={onClick}>
                <IconSprite name={name} />
                {srName && <span className="sr-only">{srName}</span>}
            </span>
    )
}

export default Icon