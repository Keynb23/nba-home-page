import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero-content">
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
