import * as React from 'react'
import { PlaceholderProps, Placeholder } from '../Placeholder'

export interface MainSectionProps {
    renderingBackground?: string,
    renderingMarginBottom?: string,
    renderingWidth?: string,
    title?: string,
    subTitle?: string,
    placeholders?: any
}

export const MainSection: React.SFC<MainSectionProps> = ({ renderingBackground, renderingWidth, renderingMarginBottom, title, subTitle, placeholders, children }) => {
    const asEditable = (value) => { return { __html: value }; }

    return (
        <section className={`m-section ${renderingBackground ? renderingBackground : ''} ${renderingWidth ? renderingWidth : null} ${renderingMarginBottom && renderingMarginBottom === '0' ? 'h-mb-n' : ''}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
        </section>
    );
}



export default MainSection;