import React from "react";
import '../tags/tags.css';

const Tags = () => {
    const data = {"tags": ["Pantry", "Obsolete", "Blender", "Lightning Deal"]}
    const tags = data.tags.map(tag => 
        <div key={tag} className="tags">
            {tag}
        </div>
    );

    return(
        <div className="container tag-details">
            <hr />
            <div className="container tag-content">
                {tags}
            </div>
            <hr />
        </div>
    );
}

export default Tags;