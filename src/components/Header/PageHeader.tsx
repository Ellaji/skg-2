import * as React from 'react'
import Transition from 'react-transition-group/Transition'
import Icon from '../Shared/Icon'
import LinkProps from '../Interfaces/Link'
import ImageProps from '../Interfaces/Image'

interface NavigationItemProps {
    title: string;
    label: string;
    link: string;
    target?: string;
    behaviour?: string;
    icon?: string;
    image?: string;
    children?: NavigationItemProps[];
    level: number;
    alignment?: number;
    active?: boolean;
}

export interface PageHeaderProps {
    navigation: {
        mainNavigation: NavigationItemProps[],
        secondaryNavigation: NavigationItemProps[],
        siteLogo: {
            image: ImageProps,
            link: LinkProps
        }
    }
}

interface PageHeaderState {
    isMenuOpen: boolean;
    activeNavPage: number;
}

export default class PageHeader extends React.Component<PageHeaderProps, PageHeaderState> {
    constructor(props) {
        super(props);

        this.state = {
            isMenuOpen: false,
            activeNavPage: 0
        }
    }
    
    setActiveSubnav(e, index) {
        e.preventDefault();
        this.setState({ activeNavPage: index });
    }

    unsetActiveSubnav(e, index) {
        e.preventDefault();
        this.setState({ activeNavPage: 0 });
    }

    openMenu(e) {
        this.setState({ isMenuOpen: true })
    }

    closeMenu(e) {
        this.setState({ isMenuOpen: false })        
    }
 
    render() {
        return (
            <header className="o-header m-grid">
                <div className="m-grid__M12">
                    <nav className="o-nav">
                        <a href="#" className="m-logo">
                            SKG
                        </a>

                        <div className="o-nav__main o-nav__main--desktop">
                            <ul className="a-list o-nav__menu o-nav__menu--primary">
                                {this.props.navigation.mainNavigation.map((item, index) => 
                                    <li className={`${this.state.activeNavPage === index + 1 ? 'hover' : ''} ${item.active ? 'active' : ''}`} key={index}><a href={item.link} target={item.target} 
                                        onMouseOver={(e) => this.setActiveSubnav(e, index+1)} 
                                        onMouseOut={(e) => this.unsetActiveSubnav(e, index+1)}>{item.title}</a></li>
                                )}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}