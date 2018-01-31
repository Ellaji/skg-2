import * as React from 'react'
import LinkProps from '../Interfaces/Link'
import AnimateHeight from 'react-animate-height'
import Icon from '../Shared/Icon'

export interface CollapsibleListState {
    height: any;
}

export interface CollapsibleListProps {
    title: string;
    links: LinkProps[];
    breakpoint?: string;
}

class CollapsibleList extends React.Component<CollapsibleListProps, CollapsibleListState> {
    constructor(props : CollapsibleListProps) {
        super(props)

        this.state = {
            height: 0
        }
    }

    toggleHeight() {
        if (this.state.height === 0)
            this.setState({ height: 'auto' })
        else
            this.setState({ height: 0 })
    }

    render() {
        let isCollapsed = this.state.height === 0;
        const asEditable = (value) => { return { __html: value }; };

        return (
            <div className={`m-collapsible-list ${isCollapsed ? 'collapsed' : ''} media-query-${ this.props.breakpoint }`}>
                <h6 className="m-collapsible-list__title" onClick={this.toggleHeight.bind(this)} >
                    <span dangerouslySetInnerHTML={asEditable(this.props.title)}></span>
                <Icon name="angle-down" />
            </h6>
            <AnimateHeight
                height={ this.state.height }
            >
                <ul className="a-list">
                    {this.props.links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href={link.url} dangerouslySetInnerHTML={asEditable(link.text)}></a>
                            </li>
                        )
                    })}
                </ul>
            </AnimateHeight>
        </div>
        )
    }
}

export default CollapsibleList
