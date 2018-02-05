import * as React from 'react';

export interface gridItemProps {
    name: string;
}

const gridItems = [
    {
        name: 'Main2Column6_6',
    },
    {
        name: 'Main3Column4_4_4',
    }
]

for(var item=0; item < gridItems.length; item++) {

    export const {item}: React.SFC<gridItemProps> = ({ item.name }) => {
        return (
            <div className={gridItems[i]}>
                <span>{gridItems[i]}</span>
            </div>
        );
    };

    export default (gridItems[i]);
}



