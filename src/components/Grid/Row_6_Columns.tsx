import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../Placeholder';

interface Row_6_ColumnsProps {
    placeholders?: any;
    columnWidths: string; //default "equal" or a grid combination written like "1-3-1-3-1-3" (in Sitecore = a dropdown with all options)
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

export const Row_6_Columns: React.SFC<Row_6_ColumnsProps> = ({ placeholders, children, columnWidths, breakTo2x3Columns, breakTo3x2Columns, breakTo6x1Column }) => {

    let MQ6;  
    if (breakTo2x3Columns.mediaQuery !== "none") {
        MQ6 = breakTo2x3Columns.mediaQuery;
    } else if ((breakTo2x3Columns.mediaQuery === "none") && (breakTo3x2Columns.mediaQuery !== "none")) { 
        MQ6 = breakTo3x2Columns.mediaQuery;
    } else if ((breakTo2x3Columns.mediaQuery === "none") && (breakTo3x2Columns.mediaQuery === "none") && (breakTo6x1Column.mediaQuery !== "none")) {
        MQ6 = breakTo6x1Column.mediaQuery;
    } else if ((breakTo2x3Columns.mediaQuery === "none") && (breakTo3x2Columns.mediaQuery === "none") && (breakTo6x1Column.mediaQuery === "none")) {
        MQ6 = ""; //always 6 columns in a row
    } else { console.log("Unexpected property in Row_6_Columns component MQ6.")};

    let MQ3;
    if ((breakTo2x3Columns.mediaQuery !== "none") && (breakTo3x2Columns.mediaQuery !== "none")) {
        MQ3 = breakTo3x2Columns.mediaQuery;
    } else if ((breakTo2x3Columns.mediaQuery !== "none") && (breakTo3x2Columns.mediaQuery === "none") && (breakTo6x1Column.mediaQuery !== "none")) {
        MQ3 = breakTo6x1Column.mediaQuery;
    } else if ((breakTo2x3Columns.mediaQuery !== "none") && (breakTo3x2Columns.mediaQuery === "none") && (breakTo6x1Column.mediaQuery === "none")) {
        MQ3 = ""; //does not break to less than 3 columns in a row
    } else { console.log("Unexpected property in Row_6_Columns component MQ3.")};

    let MQ2;
    if ((breakTo3x2Columns.mediaQuery !== "none") && (breakTo6x1Column.mediaQuery !== "none")) {
        MQ2 = breakTo6x1Column.mediaQuery;
    } else if ((breakTo2x3Columns.mediaQuery !== "none") && (breakTo6x1Column.mediaQuery === "none")) {
        MQ2 = ""; //does not break to less than 2 columns in a row  
    } else { console.log("Unexpected property in Row_6_Columns component MQ2.")};

    let secondBreakPointMQ;
    if ((MQ6 !== "") && (MQ3 !== "")) {
        secondBreakPointMQ = "m-grid-"+ MQ3;
    } else if ((MQ6 !== "") && (MQ2 !== "")) {
        secondBreakPointMQ = "m-grid-" + MQ2;
    } else {
        secondBreakPointMQ = ""; //there is no second breakpoint
    };

    let thirdBreakPointMQ;
    if ((MQ6 !== "") && (MQ3 !== "") && (MQ2 !== "")) {
        thirdBreakPointMQ = "m-grid-"+ MQ2;
    } else {
        thirdBreakPointMQ = ""; //there is no third breakpoint
    };

    const colWidths6Col = columnWidths.split('-');
    let c6Width1 = colWidths6Col[0];
    let c6Width2 = colWidths6Col[1];
    let c6Width3 = colWidths6Col[2];
    let c6Width4 = colWidths6Col[3];
    let c6Width5 = colWidths6Col[4];
    let c6Width6 = colWidths6Col[5];

    const colWidths3Col = breakTo2x3Columns.columnWidths.split('-');
    let c3Width1;
    let c3Width2;
    let c3Width3;
    if (breakTo2x3Columns.mediaQuery === "none") {
        c3Width1 = "";
        c3Width2 = "";
        c3Width3 = "";
    } else {
        c3Width1 = colWidths3Col[0];
        c3Width2 = colWidths3Col[1];
        c3Width3 = colWidths3Col[2];
    };

    const colWidths2Col = breakTo3x2Columns.columnWidths.split('-');
    let c2Width1;
    let c2Width2;
    if (breakTo3x2Columns.mediaQuery === "none") {
        c2Width1 = "";
        c2Width2 = "";
    } else {
        c2Width1 = colWidths2Col[0];
        c2Width1 = colWidths2Col[1];
    };

return (
    <div className="m-grid">
        <div className={`m-grid__${MQ6}${c6Width1} ${MQ3}${c3Width1} ${MQ2}${c2Width1}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
        </div>
        <div className={`m-grid__${MQ6}${c6Width2} ${MQ3}${c3Width2} ${MQ2}${c2Width2}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
        </div>
        <div className={`m-grid__${MQ6}${c6Width3} ${MQ3}${c3Width3} ${MQ2}${c2Width1}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
        </div>
        <div className={`m-grid__${MQ6}${c6Width4} ${MQ3}${c3Width1} ${MQ2}${c2Width2}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={3} />
        </div>
        <div className={`m-grid__${MQ6}${c6Width5} ${MQ3}${c3Width2} ${MQ2}${c2Width1}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={4} />
        </div>
        <div className={`m-grid__${MQ6}${c6Width6} ${MQ3}${c3Width3} ${MQ2}${c2Width2}`}>
            <Placeholder children={children} placeholders={placeholders} placeholderIndex={5} />
        </div>
    </div>
);
}

export default Row_6_Columns;