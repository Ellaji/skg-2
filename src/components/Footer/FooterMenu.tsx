import * as React from 'react';
import CollapsibleList from "../List/CollapsibleList";
import { CollapsibleListProps } from "../List/CollapsibleList";

export interface FooterMenuProps {
    themes: CollapsibleListProps[];
}

export const FooterMenu: React.SFC<FooterMenuProps> = ({ themes }) => {
    return (
        <div className="flex-5-columns-responsive">
            {themes.map((theme, index) => {
                    return (
                        <div key={index}>
                            <CollapsibleList title={theme.title} links={theme.links}/>
                        </div>
                    )
                })}            
        </div>
    );
}

export default FooterMenu;