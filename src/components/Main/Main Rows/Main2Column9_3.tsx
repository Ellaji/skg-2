import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main2Column9_3Props {
    placeholders?: any
}

export const Main2Column9_3: React.SFC<Main2Column9_3Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M9">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M3">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
        </div>
    );
}

export default Main2Column9_3;