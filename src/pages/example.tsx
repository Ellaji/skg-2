import * as React from 'react';
import MainSection from '../components/Main/MainSection'
import FooterMenu from '../../src/components/Footer/FooterMenu';

const themeLists = [
    {   "title": "Products",
        "links": [
            {   "text": "Packaging",
                "url": "#",
                "active": true,  
            },
            {   "text": "Containerboard",
                "url": "#",
                "active": true,  
            },
            {   "text": "Other paper and board",
                "url": "#",
                "active": true,  
            },
            {   "text": "Recovered paper",
                "url": "#",
                "active": true,  
            },
            {   "text": "Packaging machinery",
                "url": "#",
                "active": true,  
            },
            {   "text": "Services",
                "url": "#",
                "active": true,  
            }
        ],
        "breakpoint": "XL",
    },
    {   "title": "Innovation", 
        "links": [
            {   "text": "How we innovate",
                "url": "#",
                "active": true,  
            },
            {   "text": "Leading developments",
                "url": "#",
                "active": true,  
            },
            {   "text": "Innovation centres",
                "url": "#",
                "active": true,  
            },
            {   "text": "Packaging and beyond",
                "url": "#",
                "active": true,  
            }
        ],
        "breakpoint": "XL",
    },
    {   "title": "Sustainability",
        "links": [
            {   "text": "Sustainability vision",
                "url": "#",
                "active": true,  
            },
            {   "text": "Our approach",
                "url": "#",
                "active": true,  
            },
            {   "text": "Environment",
                "url": "#",
                "active": true,  
            },
            {   "text": "Social",
                "url": "#",
                "active": true,  
            },
            {   "text": "Sustainability in our business",
                "url": "#",
                "active": true,  
            },
            {   "text": "Performance",
                "url": "#",
                "active": true,  
            }
        ],
        "breakpoint": "XL",
    },
    {   "title": "About us",
        "links": [
            {   "text": "Who we are",
                "url": "#",
                "active": true,  
            },
            {   "text": "What we do",
                "url": "#",
                "active": true,  
            },
            {   "text": "Where we are",
                "url": "#",
                "active": true,  
            },
            {   "text": "Organisation and management",
                "url": "#",
                "active": true,  
            },
            {   "text": "Vision, mission and values",
                "url": "#",
                "active": true,  
            },
            {   "text": "Governance",
                "url": "#",
                "active": true,  
            }
        ],
        "breakpoint": "XL",
    },
    {   "title": "Investors",
        "links": [
            {   "text": "Share information",
                "url": "#",
                "active": true,  
            },
            {   "text": "Financial reports",
                "url": "#",
                "active": true,  
            },
            {   "text": "Presentations",
                "url": "#",
                "active": true,  
            },
            {   "text": "Regulatory news",
                "url": "#",
                "active": true,  
            },
            {   "text": "Financial calendar",
                "url": "#",
                "active": true,  
            },
            {   "text": "AGM",
                "url": "#",
                "active": true,  
            }
        ],
        "breakpoint": "XL",
    }
]

const ExamplePage = () => (
    <div className="example">
        <div className="sitewrapper">
            <div className="example__main">
            </div>
            <div className="example__footer">
                <FooterMenu themes={themeLists} />
            </div>
        </div>
    </div>
)

export default ExamplePage