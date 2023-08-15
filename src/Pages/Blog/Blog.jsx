import { Chrono } from "react-chrono";
import Title from "../../Component/Title";

const Blog = () => {
    const items = [
        {
            title: "August 2023",
            cardTitle: "View More",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "They are equipped with a breathable and waterproof membrane that’s resistant to weather and wind. The men’s Toundra model stands out for its four pockets in the front and elastic cuffs. The Typha style for women offers a loose-fitting silhouette that cinches at the waist. In the both cases, we absolutely love the cozy, sherpa-lined collar with a hidden hood, a detail that’s practical and trendy..",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://i.ibb.co/vkHNpN0/illustration-happy-anniversary-gift-box-present-banner.jpg"
                }
            }
        },
        {
            title: "August 2023",
            cardTitle: "View More",
            url: "http://www.history.com",
            cardSubtitle: "Top 5 Otlist straflist",
            cardDetailedText: "These are the people who make your life asier. Large tiles were arranged on the counter top plate near the window of the living room, they",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://i.ibb.co/0mHjQ3C/front-view-cute-little-baby-boy-cupcake-teddybear.jpg"
                }
            }
        },
        {
            title: "May 1678",
            cardTitle: "View More",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "The Montreal-based company has been located on Rachel Street since the very beginning. It’s at this location in the heart of the Plateau-Mont-Royal where all Umino coats are crafted using a meticulous artisanal manufacturing process. Directly inspired by the climate in which they live, the artisans work with care to create warm, heavy-duty coats. Each model is designed to perform a specific function while still staying fashionable",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c53945c38b614702ba6fae1d0164b2f1_9366/LNY_Trefoil_Fill_Tee_Black_HR9040_21_model.jpg"
                }
            }
        },
        {
            title: "May 2023",
            cardTitle: "View More",
            url: "http://www.history.com",
            cardSubtitle: "Men of the British Expeditionary Force (BEF) wade out to..",
            cardDetailedText: "They are equipped with a breathable and waterproof membrane that’s resistant to weather and wind. The men’s Toundra model stands out for its four pockets in the front and elastic cuffs. The Typha style for women offers a loose-fitting silhouette that cinches at the waist. In the both cases, we absolutely love the cozy, sherpa-lined collar with a hidden hood, a detail that’s practical and trendy.",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/ac09bb56249b43158485aca1007cc1ef_9366/Excel_Backpack_Black_EX6933_01_standard.jpg"
                }
            }
        }
    ];

    return (
        <div className="w-100 container-fluid">
            <div>
                <Title>
                    <span className='border-style'>Blo</span>g
                </Title>
                <div className="d-flex justify-content-center align-items-center container">
                    <div>
                        <h4 className="text-center fs-1 py-5 font-bold">Our Latest Blog</h4>
                        <div style={{ width: '100%', overflowX: 'hidden' }}>
                            <Chrono items={items} slideItemDuration={4500} slideShow mode="VERTICAL_ALTERNATING" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;