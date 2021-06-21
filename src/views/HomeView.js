import React from 'react';
import Banner from '../components/Banner'
import Card from '../components/Card'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card
                    src="https://images.pexels.com/photos/853151/pexels-photo-853151.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Online Experiences"
                    description="Unique activities we can do together, led by a world of hosts."
                />
                <Card
                    src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287__340.jpg"
                    title="Unique stays"
                    description="Spaces that are more than just a place to sleep."
                />
                <Card
                    src="https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
            </div>
            <div className="home__section">
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="$130/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="$350/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="$70/night"
                />
            </div>

        </div>

    );
}

export default Home;