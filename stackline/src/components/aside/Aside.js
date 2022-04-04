import React from "react";
import '../aside/aside.css'

const Aside  = () => {
    const data = {
        "title": "Shark Ninja",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg",
        "subtitle": "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System",
        "brand": "Nutribullet"
    }
    return(
        <aside>
            <div className="container product-details">
                <img src={data.image} alt={`${data.brand} ${data.title}`} className="product-image" />
                <div className="product-info">
                    <h2 className="product-title">{data.title}</h2>
                    <p className="product-subheading">{data.subtitle}</p>
                </div>
            </div>
        </aside>
    );
}

export default Aside;