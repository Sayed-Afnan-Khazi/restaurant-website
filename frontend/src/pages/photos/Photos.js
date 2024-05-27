import React from "react";
import './photography.css';
import photo1 from './photo-1.jpg';
import photo2 from './photo-2.jpg';
import photo3 from './photo-3.jpg';
import photo4 from './photo-4.jpg';
import photo5 from './photo-5.jpg';
import photo6 from './photo-6.jpg';
import photo7 from './photo-7.jpg';

const Photos = () => {
    return (
        <>
            <section class="page-top" id="top">
            <h1 class="page-heading">Photography</h1>
            <p class="page-details">Follow Le Fish Au Chocolat's <a class="link" href="https://instagram.com">Instagram</a> page for more food photography.</p>
            </section>
            <section class="galleria">
                <div class="galleria-display">
                    <div class="galleria-box span-2-rows span-2-columns">
                        <img src={photo1} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">30-04-2024</p>
                            <p class="galleria-img-caption">We're not saying it's magic, but this food is practically levitating with deliciousness.</p>
                        </div>
                    </div>
                    <div class="galleria-box span-3-rows span-2-columns">
                        <img src={photo2} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">23-11-2022</p>
                            <p class="galleria-img-caption">Warning: May cause uncontrollable cravings.</p>
                        </div>
                    </div>
                    <div class="galleria-box span-3-rows span-2-columns">
                        <img src={photo3} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">17-11-2023</p>
                            <p class="galleria-img-caption">Ocean's finest, artfully arranged. Paired with a perfect pour, it's a symphony for the senses.</p>
                        </div>
                    </div>
                    <div class="galleria-box span-3-rows span-2-columns">
                        <img src={photo4} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">17-09-2023</p>
                            <p class="galleria-img-caption">Forget the fancy forks. Sometimes, the best meals are eaten with your hands.</p>
                        </div>
                    </div>
                    <div class="galleria-box span-2-rows span-2-columns">
                        <img src={photo5} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">01-06-2023</p>
                            <p class="galleria-img-caption">Where the ocean meets the plate.</p>
                        </div>
                    </div>
                    <div class="galleria-box span-2-rows span-2-columns">
                        <img src={photo6} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">30-09-2022</p>
                            <p class="galleria-img-caption">Sharing is caring, but we won't judge if you keep these all to yourself.</p>
                        </div>
                    </div>
                    <div class="galleria-box span-3-rows span-2-columns">
                        <img src={photo7} alt="" class="galleria-img"/>
                        <div class="galleria-data">
                            <p class="galleria-img-date">30-12-2022</p>
                            <p class="galleria-img-caption">Hand-crafted chips, gourmet toppings. Sharing never tasted this good.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Photos;