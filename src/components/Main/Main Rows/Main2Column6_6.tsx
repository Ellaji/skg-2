import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main2Column6_6Props {
    placeholders?: any
}

export const Main2Column6_6: React.SFC<Main2Column6_6Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M6">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M6">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
        </div>
    );
}

export default Main2Column6_6;