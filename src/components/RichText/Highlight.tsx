import * as React from 'react'
import ImageProps from '../Interfaces/Image'
import RichText from '../RichText/Default'
import Base from '../Interfaces/Base'

export interface HighlightProps extends Base {
    title?: string;
    abstract?: string;
    image?: ImageProps;
    text: string;
    variation?: string;
}

const Highlight = ({title, abstract, image, text, variation} : HighlightProps) => {
    const asEditable = (value) => { return { __html: value }; }

    return (
        <div className="m-highlight__container">
            <div className={`m-highlight ${image && image.url ? 'm-highlight--has-image' : ''} ${variation && `m-highlight--${variation}`}`}>                
                {image && <figure className="m-highlight__figure" style={{backgroundImage: `url(${image.url})`}}>
                    <img src={image.url} alt={image.alt} />
                </figure>}
                <div className="m-highlight__body">
                    <div className="m-highlight__title h3" dangerouslySetInnerHTML={asEditable(title)}></div>
                    <RichText text={text} />
                </div>
            </div>
        </div>
    )
}

export default Highlight