import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main4Column2_2_4_4Props {
    placeholders?: any
}

export const Main4Column2_2_4_4: React.SFC<Main4Column2_2_4_4Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
            <div className="m-grid__M4">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
            </div>
            <div className="m-grid__M4">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={3} />
            </div>
        </div>
    );
}

export default Main4Column2_2_4_4;