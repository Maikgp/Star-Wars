import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LearnMorePlanets = () => {
    const { id } = useParams();

    const [learnMorePlanets, setLearnMorePlanets] = useState(null);

    const fetchLearnMorePlanets = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
            const data = await response.json();
            setLearnMorePlanets(data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchLearnMorePlanets();
    }, []);

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className="body ">
                <div className="row">
                    <div className="col-12 col-md-6 ">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="w-90 img-thumbnail h-100px" />
                    </div>
                    <div className="col-12 col-md-6 ">
                        {learnMorePlanets &&
                            <div style={{ textAlign: 'center', padding: '40px' }}>
                                <h1 style={{ fontFamily: 'Star Jedi', color: 'white', marginRight:"250px" }}>{learnMorePlanets.properties.name}</h1>
                                <p style={{ color: 'white', marginRight:"250px" }}>{learnMorePlanets.description}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>

            <div className="footer" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {learnMorePlanets &&
                    <div className="row" style={{ width: '95%', color: 'white', fontFamily: 'Star Jedi' }}>
                        <div id="linea-horizontal" className="border-top border-white border-2" style={{ marginBottom: '10px' }}></div>
                        <div className="col-2"><h4 style={{ color: 'white' }}>Name </h4><p style={{ color: 'white' }}>{learnMorePlanets.properties.name}</p> </div>
                        <div className="col-2"> <h4 style={{ color: 'white' }}>Climate </h4> <p style={{ color: 'white' }}>{learnMorePlanets.properties.climate} </p>      </div>
                        <div className="col-2"> <h4 style={{ color: 'white' }}>Population</h4> <p style={{ color: 'white' }}>{learnMorePlanets.properties.population}  </p> </div>
                        <div className="col-2"> <h4 style={{ color: 'white' }} >Orbital Period </h4>  <p style={{ color: 'white' }}>{learnMorePlanets.properties.orbital_period}  </p>  </div>
                        <div className="col-2"> <h4 style={{ color: 'white' }}>Rotation Period</h4> <p style={{ color: 'white' }} >{learnMorePlanets.properties.rotation_period} </p>   </div>
                        <div className="col-2"> <h4 style={{ color: 'white' }}>Diameter</h4><p style={{ color: 'white' }}>{learnMorePlanets.properties.diameter} </p>  </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default LearnMorePlanets;
