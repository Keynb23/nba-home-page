import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="Hero-left">
                <section className="Headlines">
                    <h2>HEADLINES</h2>
                    <a href="#">See More</a>

                    <div className="headline-item">
                        <h4><a href="#">Nightly Pulse: Thunder vs Timberwolves Game 5</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">Thunder look to finish Wolves in Game 5</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">SGA vs. NAW: Cousins meet in West Finals</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">5 takeaways: Haliburton dazzles in Game 4</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">Can Knicks find way to slow down Pacers?</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#"> Shaqtin' A Fool: Best of 2024-25 season</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">Westbrook undergoes right hand surgery</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">Adelman reveals Nuggets' offseason plans</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#">Top 10 reasons why Lebron is the GOAT</a></h4>
                    </div>
                    <div className="headline-item">
                        <h4><a href="#"> All-Access: Flagg at NBA Draft Combine</a></h4>
                    </div>
                </section>
            </div>

            <div className="hero-vid">
                <iframe 
                width="1022" 
                height="575" 
                src="https://www.youtube.com/embed/azyLhfy4yoo?autoplay=1&mute=1&loop=1&playlist=azyLhfy4yoo" 
                title="Don’t Miss a Thing | 2025 NBA Playoffs Presented by Google" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
                </iframe>
            </div>
        </div>
    );
}

export default Hero;
