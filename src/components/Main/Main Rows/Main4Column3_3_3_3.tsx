import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main4Column3_3_3_3Props {
    placeholders?: any
}

export const Main4Column3_3_3_3: React.SFC<Main4Column3_3_3_3Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
            </div>
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={3} />
            </div>
        </div>
    );
}

export default Main4Column3_3_3_3;