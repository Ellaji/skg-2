import * as React from 'react'

export interface RichTextProps {
    className?: string;
    text: string;
}

const RichText = ({className, text} : RichTextProps) => {
    const asEditable = (value) => { return { __html: value }; }

    return <div className={`m-rtc ${className}`} dangerouslySetInnerHTML={asEditable(text)} />
}

export default RichText