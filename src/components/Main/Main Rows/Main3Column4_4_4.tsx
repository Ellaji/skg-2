import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main3Column4_4_4Props {
    placeholders?: any
}

export const Main3Column4_4_4: React.SFC<Main3Column4_4_4Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M4">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M4">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
            <div className="m-grid__M4">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
            </div>
        </div>
    );
}

export default Main3Column4_4_4;