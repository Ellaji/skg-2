import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../../Placeholder';

export interface Main6Column2_2_2_2_2_2Props {
    placeholders?: any
}

export const Main6Column2_2_2_2_2_2: React.SFC<Main6Column2_2_2_2_2_2Props> = ({ placeholders, children }) => {
    return (
        <div className="m-grid">
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </div>
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
            </div>
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={3} />
            </div>
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={4} />
            </div>
            <div className="m-grid__M2">
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={5} />
            </div>
        </div>
    );
}

export default Main6Column2_2_2_2_2_2;