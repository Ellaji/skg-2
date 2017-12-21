import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main1ColumnProps {
    placeholders?: any
}

export const Main1Column: React.SFC<Main1ColumnProps> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M12">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
        </div>
    );
}

export default Main1Column;