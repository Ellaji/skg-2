import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main3Column6_3_3Props {
    placeholders?: any
}

export const Main3Column6_3_3: React.SFC<Main3Column6_3_3Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M6">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
            </div>
        </div>
    );
}

export default Main3Column6_3_3;