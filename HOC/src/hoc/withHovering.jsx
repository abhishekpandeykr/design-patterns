import React from "react";

export default function withHovering(Component) {
    return props => {
        const [isHovered, setIsHovered] = React.useState(false);
        const handleMouseOver = () => setIsHovered(true);
        const handleMouseOut = () => setIsHovered(false);
        return (
            <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <Component {...props} isHovered={isHovered} />
            </div>
        );
    }
}