import { Link, Head } from "@inertiajs/react";
import { useEffect } from "react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="New inertia application" />
            <section className="home">
                <div className="decoration one"></div>
                <div className="decoration two"></div>
                <header>
                    <h3>
                        Pizza <span>Sabrosa</span>
                    </h3>
                    <nav>
                        <Link>Login</Link>
                        <Link>
                            <button>Register</button>
                        </Link>
                    </nav>
                </header>
                <section className="intro">
                    <div>
                        <h3>WE HAVE THE BEST PIZZA</h3>
                        <p>
                            Savor the irresistible allure of our artisanal
                            pizzas. Handcrafted with the finest ingredients and
                            baked to perfection, each bite is a symphony of
                            flavors. Elevate your culinary experience with us.
                        </p>
                        <Link>
                            <button>Register</button>
                        </Link>
                    </div>
                    <div>
                        <img
                            src="/images/pizza-intro-image.jpg"
                            alt="pizza-intro"
                        />
                        <div className="img-bg"></div>
                    </div>
                </section>
                <section className="pizza-section">
                    <h3>
                        <span>Place Your</span> Order Now!
                    </h3>
                    <div className="pizzas">
                        <div className="pizza">
                            <img
                                src="/images/inna-gurina-JspLKUauwSI-unsplash.jpg"
                                alt="card"
                            />
                            <div className="pizza-details">
                                <p>Napolian Piza</p>
                                <div className="pizza-SP">
                                    <p>Size: Regular</p>
                                    <p>
                                        <span>$20.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <img
                                src="/images/inna-gurina-JspLKUauwSI-unsplash.jpg"
                                alt="card"
                            />
                            <div className="pizza-details">
                                <p>Napolian Piza</p>
                                <div className="pizza-SP">
                                    <p>Size: Regular</p>
                                    <p>
                                        <span>$20.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <img
                                src="/images/inna-gurina-JspLKUauwSI-unsplash.jpg"
                                alt="card"
                            />
                            <div className="pizza-details">
                                <p>Napolian Piza</p>
                                <div className="pizza-SP">
                                    <p>Size: Regular</p>
                                    <p>
                                        <span>$20.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pizza">
                            <img
                                src="/images/inna-gurina-JspLKUauwSI-unsplash.jpg"
                                alt="card"
                            />
                            <div className="pizza-details">
                                <p>Napolian Piza</p>
                                <div className="pizza-SP">
                                    <p>Size: Regular</p>
                                    <p>
                                        <span>$20.00</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer>&copy; of pizza sabrosa</footer>
            </section>
        </>
    );
}
