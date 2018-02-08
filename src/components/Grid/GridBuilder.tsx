import * as React from 'react';
import { PlaceholderProps, Placeholder } from '../Placeholder';
import { Fragment } from 'react';

//GEEFT NOG BUGS ALS JE Break to 4 columns on screensize een MQ geeft terwijl 6 columns ook gegevens heeft. 

interface GridBuilderProps {
    placeholders?: any;
    columnsInRowOnLargestScreen: string; // can only be 1, 2, 3, 4 or 6
    breakTo6Columns?: {
        mediaQuery: string; //default "XL" (can be "none", or one of the $breakpoints)
        columnWidths: string; //default "equal" 
    };
    breakTo4Columns?: {
        mediaQuery: string; //default "XL" (can be "none", or one of the $breakpoints)
        columnWidths: string; //default "equal" 
    };
    breakTo3Columns?: {
        mediaQuery: string; //default "L" (can be "none", or one of the $breakpoints)
        columnWidths: string; //default "equal".
    };
    breakTo2Columns?: {
        mediaQuery: string; //default "M" (can be "none", or one of the $breakpoints)
        columnWidths: string; //default "equal". 
    };
    breakTo1Column: {
        mediaQuery: string; //default "S" (can be "none", or one of the $breakpoints)
    };
}

export const GridBuilder: React.SFC<GridBuilderProps> = ({ placeholders, children, columnsInRowOnLargestScreen, breakTo6Columns, breakTo4Columns, breakTo3Columns, breakTo2Columns, breakTo1Column }) => {

    let mQTo6;  
    if ( (columnsInRowOnLargestScreen == "6") && (breakTo6Columns.mediaQuery === "none") ) {
        mQTo6 = "m-grid__"; //6 columns in a row under the lowest defined media query
    } else if (columnsInRowOnLargestScreen == "4") {
        mQTo6 = ""; //do not render a class for 6 columns
    } else if (breakTo6Columns.mediaQuery !== "none") {
        mQTo6 = "m-grid__" + breakTo6Columns.mediaQuery;
    } else { 
        mQTo6 = ""; //do not render a class for 6 columns
    }

    let mQTo4;
    if ( (columnsInRowOnLargestScreen == "4") && (breakTo4Columns.mediaQuery === "none") ) {
        mQTo4 = "m-grid__"; //4 columns in a row under the lowest defined media query
    } else if (columnsInRowOnLargestScreen == "6") {
        mQTo4 = ""; //do not render a class for 4 columns if columnsInRowOnLargestScreen = 6  
    } else if (breakTo4Columns.mediaQuery !== "none") {
        mQTo4 = "m-grid__" + breakTo4Columns.mediaQuery; 
    } else { 
        mQTo4 = ""; //does not break to 4 columns
    }

    let mQTo3;
    if ( (columnsInRowOnLargestScreen == "3") && (breakTo4Columns.mediaQuery === "none") ) {
        mQTo3 = "m-grid__"; //3 columns in a row under the lowest defined media query
    } else if (breakTo3Columns.mediaQuery !== "none") {
        mQTo3 = "m-grid__" + breakTo3Columns.mediaQuery; 
    } else {
        mQTo3 = ""; //does not break to 3 columns
    };

    let mQTo2;
    if (columnsInRowOnLargestScreen == "3") {
        mQTo2 = ""; //
    } else if ( (columnsInRowOnLargestScreen == "2") && (breakTo2Columns.mediaQuery === "none") ) {
        mQTo2 = "m-grid__"; //2 columns in a row under the lowest defined media query
    } else if (breakTo2Columns.mediaQuery !== "none") {
        mQTo2 = "m-grid__" + breakTo2Columns.mediaQuery;
    } else {
        mQTo2 = ""; //does not break to 2 columns
    };

    let mQTo1;
    if ( (columnsInRowOnLargestScreen == "1") && (breakTo1Column.mediaQuery === "none") ) {
        mQTo1 = "m-grid__"; //1 column in a row under the lowest defined media query
    } else if (breakTo1Column.mediaQuery !== "none") {
        mQTo1 = "m-grid__" + breakTo1Column.mediaQuery;
    } else {
        mQTo1 = ""; //does not break to 1 column
    }

    let c6Width1;
    let c6Width2;
    let c6Width3;
    let c6Width4;
    let c6Width5;
    let c6Width6;

    let colWidths6Col;

    if (columnsInRowOnLargestScreen !== "6") { 
        c6Width1 = c6Width2 = c6Width3 = c6Width4 = c6Width5 = c6Width6 = "";         
    } else if (breakTo6Columns.columnWidths == "equal") {
        c6Width1 = c6Width2 = c6Width3 = c6Width4 = c6Width5 = c6Width6 = 2; 
    } else {
        colWidths6Col = breakTo6Columns.columnWidths.split('-');
        c6Width1 = colWidths6Col[0];
        c6Width2 = colWidths6Col[1];
        c6Width3 = colWidths6Col[2];
        c6Width4 = colWidths6Col[3];
        c6Width5 = colWidths6Col[4];
        c6Width6 = colWidths6Col[5];
    }

    let c4Width1;
    let c4Width2;
    let c4Width3;
    let c4Width4;

    let colWidths4Col;

    if (breakTo4Columns.mediaQuery === "none") {
        c4Width1 = c4Width2 = c4Width3 = "";
    } else if (breakTo3Columns.columnWidths == "equal") {
        c4Width1 = c4Width2 = c4Width3 = c4Width4 = "3";
    } else {
        colWidths4Col = breakTo3Columns.columnWidths.split('-');
        c4Width1 = colWidths4Col[0];
        c4Width2 = colWidths4Col[1];
        c4Width3 = colWidths4Col[2];
        c4Width4 = colWidths4Col[3];
    }

    let c3Width1;
    let c3Width2;
    let c3Width3;

    let colWidths3Col;

    if (breakTo3Columns.mediaQuery === "none") {
        c3Width1 = c3Width2 = c3Width3 = "";
    } else if (breakTo3Columns.columnWidths == "equal") {
        c3Width1 = c3Width2 = c3Width3 = "4";
    } else {
        colWidths3Col = breakTo3Columns.columnWidths.split('-');
        c3Width1 = colWidths3Col[0];
        c3Width2 = colWidths3Col[1];
        c3Width3 = colWidths3Col[2];
    }

    let c2Width1;
    let c2Width2;

    let colWidths2Col;

    if (breakTo2Columns.mediaQuery === "none") {
        c2Width1 = c2Width2 = "";
    } else if  (breakTo2Columns.columnWidths == "equal") {
        c2Width1 = c2Width2 = "6";
    } else {
        colWidths2Col = breakTo2Columns.columnWidths.split('-');
        c2Width1 = colWidths2Col[0];
        c2Width2 = colWidths2Col[1];
    }

    let c1Width;
    if (breakTo1Column.mediaQuery !== "none") {
        c1Width = "12";
    } else {
        c1Width = "";
    }

    return (
        <div className="m-grid colored">
            <div className={`${mQTo6}${c6Width1} ${mQTo4}${c4Width1} ${mQTo3}${c3Width1} ${mQTo2}${c2Width1} ${mQTo1}${c1Width}`}>
                <Placeholder children={children} placeholders={placeholders} placeholderIndex={0} />
            </div>
            {(columnsInRowOnLargestScreen == "2" || columnsInRowOnLargestScreen == "3" || columnsInRowOnLargestScreen == "4" || columnsInRowOnLargestScreen == "6" ) ?   
                <div className={`${mQTo6}${c6Width2} ${mQTo4}${c4Width2} ${mQTo3}${c3Width2} ${mQTo2}${c2Width2} ${mQTo1}${c1Width}`}>
                    <Placeholder children={children} placeholders={placeholders} placeholderIndex={1} />
                </div>
            : null }
            {(columnsInRowOnLargestScreen == "3" || columnsInRowOnLargestScreen == "4" || columnsInRowOnLargestScreen == "6" ) ?   
                <div className={`${mQTo6}${c6Width3} ${mQTo4}${c4Width3} ${mQTo3}${c3Width3} ${mQTo2}${c2Width1} ${mQTo1}${c1Width}`}>
                    <Placeholder children={children} placeholders={placeholders} placeholderIndex={2} />
                </div>
            : null }
            {(columnsInRowOnLargestScreen == "4" || columnsInRowOnLargestScreen == "6" ) ?   
                <div className={`${mQTo6}${c6Width4} ${mQTo4}${c4Width4} ${mQTo3}${c3Width1} ${mQTo2}${c2Width2} ${mQTo1}${c1Width}`}>
                    <Placeholder children={children} placeholders={placeholders} placeholderIndex={3} />
                </div>
            : null }
            {(columnsInRowOnLargestScreen == "6") ?
                    <div className={`${mQTo6}${c6Width5} ${mQTo3}${c3Width2} ${mQTo2}${c2Width1} ${mQTo1}${c1Width}`}>
                        <Placeholder children={children} placeholders={placeholders} placeholderIndex={4} />
                    </div>
            :null } 
            {(columnsInRowOnLargestScreen == "6") ?
                    <div className={`${mQTo6}${c6Width6} ${mQTo3}${c3Width3} ${mQTo2}${c2Width2} ${mQTo1}${c1Width}`}>
                        <Placeholder children={children} placeholders={placeholders} placeholderIndex={5} />
                    </div>
            : null }
        </div>
    );
}

export default GridBuilder;