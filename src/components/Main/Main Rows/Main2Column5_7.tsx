import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main2Column5_7Props {
    placeholders?: any
}

export const Main2Column5_7: React.SFC<Main2Column5_7Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M5">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M7">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
        </div>
    );
}

export default Main2Column5_7;