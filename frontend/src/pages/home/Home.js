import { React, useEffect } from "react";
import logo3 from './logo3.jpeg';
import about1 from './about-1.jpeg';
import about2 from './about-2.jpeg';
import chef1 from './chef-1.jpeg';
import chef2 from './chef-2.jpeg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        // Reset other "constant" styles
        document.querySelector('.hamburger-menu').classList.remove('opaque-blue');
        document.querySelector('.navbar-title').classList.remove('active');
    })

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.hamburger-menu');
            const navTitle = document.querySelector('.navbar-title');
            
            // Set scroll-wise appear
            if (window.scrollY > window.innerHeight / 2) {
                navbar.classList.add('opaque-blue');
                navTitle.classList.add('active');
            } else {
                navbar.classList.remove('opaque-blue');
                navTitle.classList.remove('active');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="home">
        <section className="hero" id="top">
            <img alt="logo" className="logo" src={logo3}/>
            <div className="hero-text">
                <h1>Le Fish Au Chocolat</h1>
                <p>Fine Dine Multi Cuisine Resaurant in Mysore</p>
            </div>
        </section>
        <section className="about">
                <h1 className="section-heading">About Us</h1>
                <p>Embark on a culinary odyssey at Le Fish au Chocolat. Our exquisite restaurant transcends the ordinary,
                    offering a unique fusion of French culinary artistry and the rich decadence of chocolate. Prepare to
                    have your senses tantalised by innovative dishes and impeccable service, all within a sophisticated
                    ambience designed to elevate your dining experience.
                </p>
                <div className="section-images">
                    <div className="float-image tilt-back-right"><img alt="food" className="polaroid-border" src={about1}/></div>
                    <div className="float-image tilt-back-left"><img alt="food" className="polaroid-border" src={about2}/></div>
                </div>
                <p className="rounded-btn" onClick={() => navigate('/menu')}>Explore Our Menu</p>
                <p className="rounded-btn" onClick={() => navigate('/contact')}>RSVP</p>
        </section>
        <section className="reviews">
            <h1 className="section-heading">What Our Customers Say</h1>
            <div className="reviews-container">
                <div className="review">
                    <h3>“The food was amazing!”</h3>
                    <p>“The food was amazing! The service was great and the atmosphere was perfect. I would definitely
                        recommend this restaurant to anyone looking for a great meal.”
                    </p>
                    <p>4/5 - Amelia Earhart</p>
                    </div>
                <div className="review">
                    <h3>“The best restaurant in Mysore!”</h3>
                    <p>“The best restaurant in Mysore! The food is delicious and the service is excellent. I would highly
                        recommend this restaurant to anyone looking for a great dining experience.”
                    </p>
                    <p>5/5 - John Applebees</p>
                </div>
                <div className="review">
                    <h3>“Exquisite!”</h3>
                    <p>“A great time. Fabulous staff, amazing food. A must go-to if you're in Mysore.”
                    </p>
                    <p>5/5 - Tim Cook</p>
                </div>
            </div>
            <p className="rounded-btn leave-a-review" onClick={() => navigate('/contact')}>Leave a Review</p>
        </section>
        <section className="chefs">
            <h1 className="section-heading">Meet Our Chefs</h1>
            <div className="chefs-container">
                <div className="chef">
                    <div className="chef-image">
                        <img alt="chef-1" src={chef1}/>
                    </div>
                    <div className="chef-details">
                        <h1>John Doe</h1>
                        <p className="chef-designation">Head Chef</p>
                        <p className="chef-story">John is our head chef and has been with us for over 10 years. He is passionate about creating
                            delicious dishes that are both innovative and traditional. John is dedicated to providing our
                            customers with an exceptional dining experience.
                        </p>
                    </div>
                </div>
                <div className="chef">
                    <div className="chef-image">
                        <img alt="chef-2" src={chef2}/>
                    </div>
                    <div className="chef-details">
                        <h1>Jane Doe</h1>
                        <p className="chef-designation">Head Chef</p>
                        <p className="chef-story">Jane is our head chef and has been with us for over 10 years. She is passionate about creating
                            delicious dishes that are both innovative and traditional. Jane is dedicated to providing our
                            customers with an exceptional dining experience.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    );
}

export default Home;