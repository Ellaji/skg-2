import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main2Column8_4Props {
    placeholders?: any
}

export const Main2Column8_4: React.SFC<Main2Column8_4Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M8">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M4">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
        </div>
    );
}

export default Main2Column8_4;