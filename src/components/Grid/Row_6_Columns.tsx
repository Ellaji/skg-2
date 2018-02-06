import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../Placeholder';

interface Row_6_ColumnsProps {
    placeholders?: any;
    columnWidths: string; //default "equal" or write a grid combination written like "1-3-1-3-1-3" (in Sitecore = a dropdown with some options)
    mediaQuery: string; //default "XL" (can be "none", or one of the $breakpoints)
    breakTo2x3Columns: {
        mediaQuery: string; //default "L" (can be "none", or one of the $breakpoints)
        columnWidths: string; //default "equal".
    };
    breakTo3x2Columns: {
        mediaQuery: string; //default "M" (can be "none", or one of the $breakpoints)
        columnWidths: string; //default "equal". 
    };
    breakTo6x1Column: {
        mediaQuery: string; //default "S" (can be "none", or one of the $breakpoints)
    };
}

export const Row_6_Columns: React.SFC<Row_6_ColumnsProps> = ({ placeholders, children, columnWidths, mediaQuery, breakTo2x3Columns, breakTo3x2Columns, breakTo6x1Column }) => {

    let mQTo6;  
    if (mediaQuery !== "none") {
        mQTo6 = "m-grid__" + mediaQuery;
    } else { 
        mQTo6 = "m-grid__"; //6 columns in a row under the lowest defined media query
    }

    let mQTo3;
    if (breakTo2x3Columns.mediaQuery !== "none") {
        mQTo3 = "m-grid__" + breakTo2x3Columns.mediaQuery;
    } else {
        mQTo3 = ""; //does not break to 2 rows with 3 columns
    };

    let mQTo2;
    if (breakTo3x2Columns.mediaQuery !== "none") {
        mQTo2 = "m-grid__" + breakTo3x2Columns.mediaQuery;
    } else {
        mQTo2 = ""; //does not break to 3 rows with 2 columns
    };

    let mQTo1;
    if (breakTo6x1Column.mediaQuery !== "none") {
        mQTo1 = "m-grid__" + breakTo6x1Column.mediaQuery;
    } else {
        mQTo1 = ""; //does not break to 6 rows with 1 column
    }

    let c6Width1;
    let c6Width2;
    let c6Width3;
    let c6Width4;
    let c6Width5;
    let c6Width6;

    let colWidths6Col;

    if (columnWidths == "equal") {
        c6Width1 = c6Width2 = c6Width3 = c6Width4 = c6Width5 = c6Width6 = 2; 
    } else {
        colWidths6Col = columnWidths.split('-');
        c6Width1 = colWidths6Col[0];
        c6Width2 = colWidths6Col[1];
        c6Width3 = colWidths6Col[2];
        c6Width4 = colWidths6Col[3];
        c6Width5 = colWidths6Col[4];
        c6Width6 = colWidths6Col[5];
    }

    let c3Width1;
    let c3Width2;
    let c3Width3;

    let colWidths3Col;

    if (breakTo2x3Columns.mediaQuery === "none") {
        c3Width1 = c3Width2 = c3Width3 = "";
    } else if (breakTo2x3Columns.columnWidths == "equal") {
        c3Width1 = c3Width2 = c3Width3 = 4;
    } else {
        colWidths3Col = breakTo2x3Columns.columnWidths.split('-');
        c3Width1 = colWidths3Col[0];
        c3Width2 = colWidths3Col[1];
        c3Width3 = colWidths3Col[2];
    }

    let c2Width1;
    let c2Width2;

    let colWidths2Col;

    if (breakTo3x2Columns.mediaQuery === "none") {
        c2Width1 = c2Width2 = "";
    } else if  (breakTo3x2Columns.columnWidths == "equal") {
        c2Width1 = c2Width2 = 6;
    } else {
        colWidths2Col = breakTo3x2Columns.columnWidths.split('-');
        c2Width1 = colWidths2Col[0];
        c2Width2 = colWidths2Col[1];
    }

    let c1Width;
    if (breakTo6x1Column.mediaQuery !== "none") {
        c1Width = 12;
    } else {
        c1Width = "";
    }

return (
    <div className="m-grid colored">
        <div className={`${mQTo6}${c6Width1} ${mQTo3}${c3Width1} ${mQTo2}${c2Width1} ${mQTo1}${c1Width}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
        </div>
        <div className={`${mQTo6}${c6Width2} ${mQTo3}${c3Width2} ${mQTo2}${c2Width2} ${mQTo1}${c1Width}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
        </div>
        <div className={`${mQTo6}${c6Width3} ${mQTo3}${c3Width3} ${mQTo2}${c2Width1} ${mQTo1}${c1Width}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
        </div>
        <div className={`${mQTo6}${c6Width4} ${mQTo3}${c3Width1} ${mQTo2}${c2Width2} ${mQTo1}${c1Width}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={3} />
        </div>
        <div className={`${mQTo6}${c6Width5} ${mQTo3}${c3Width2} ${mQTo2}${c2Width1} ${mQTo1}${c1Width}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={4} />
        </div>
        <div className={`${mQTo6}${c6Width6} ${mQTo3}${c3Width3} ${mQTo2}${c2Width2} ${mQTo1}${c1Width}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={5} />
        </div>
    </div>
);
}

export default Row_6_Columns;