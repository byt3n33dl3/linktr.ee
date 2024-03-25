import * as React from 'react';

type Link = {
    name: string;
    url: string;
    icon: string;
};

const LinkComponent: React.FC = () => {
    const [links, setLinks] = React.useState<Link[]>([]);

    React.useEffect(() => {
        fetch('/config/links.json')
            .then((response) => response.json())
            .then((data) => setLinks(data))
            .catch((error) => console.error("Failed to load links:", error));
    }, []);

    return (
        <div className="links-container">
            {links.map((link, index) => (
                <a key={index} href={link.url} className="link-item">
                    <img src={link.icon} alt={`${link.name} icon`} className="link-icon" />
                    {link.name}
                </a>
            ))}
        </div>
    );
};

export default LinkComponent;
