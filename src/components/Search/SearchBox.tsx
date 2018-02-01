import * as React from 'react'
import Icon from '../Shared/Icon'

interface SearchBoxProps {

}

interface SearchBoxState {
    inputValue: string;
}

class SearchBox extends React.Component<SearchBoxProps, SearchBoxState> {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'Search by keyword'
        }
    }

    render() {
        return (
            <div className="m-searchbox">
                <input type="text" placeholder={this.state.inputValue} />
                <Icon name="magnify" />
            </div>
        );
    }
}

export default SearchBox;