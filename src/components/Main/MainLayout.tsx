import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../Placeholder';

export interface MainLayoutProps {
    placeholders?: PlaceholderProps[]
}

export const MainLayout: React.SFC<MainLayoutProps> = ({ placeholders, children }) => {
    return (
        <div className="site-wrapper">
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />

            <main>
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
            </main>
            
            <Placeholder children={children} placeholders={placeholders}  placeholderIndex={2} />
        </div>
    );
}



export default MainLayout;