import * as React from 'react'
import SearchBox from './SearchBox'
import Icon from '../Shared/Icon'
import Main2Column6_6 from '../Main/Main Rows/Main2Column6_6'

interface SmartSearchProps {

}

interface SmartSearchState {

}

class SmartSearch extends React.Component<SmartSearchProps, SmartSearchState> {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="o-smartsearch">
                <Main2Column6_6>
                    <div className="o-smartsearch__searchbox">
                        <SearchBox />
                    </div>
                    <div>
                        <SearchBox />
                    </div>
                </Main2Column6_6>
            </div>
        );
    }
}

export default SmartSearch;