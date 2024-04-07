import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const LearnMore = () => {
    const { id } = useParams();

    const [learnMore, setLearnMore] = useState(null);

    const fetchLearnMore = async () => {
        try {
            const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
            const data = await response.json();
            setLearnMore(data.result);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchLearnMore();
    }, []);

    return (
        <div className="container" style={{ marginTop: "20px" }}>
            <div className="body">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="w-50 img-thumbnail h-100px" />
                    </div>
                    <div className="col-12 col-md-6">
                        {learnMore && (
                            <div style={{ textAlign: "center", padding: "40px" }}>
                                <h1 style={{ fontFamily: "Star Jedi", color: "white", marginRight:"250px" }}>{learnMore.properties.name}</h1>
                                <p style={{ color: "white",marginRight:"250px" }}>{learnMore.description}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="footer" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                {learnMore && (
                    <div className="row" style={{ width: "95%", color: "white", fontFamily: "Star Jedi" }}>
                        <div id="linea-horizontal" className="border-top border-white border-2" style={{ marginBottom: "10px" }}></div>
                        <div className="col-2">
                            <h4 style={{ color: "white" }}>Name </h4>
                            <p style={{ color: "white" }}>{learnMore.properties.name}</p>{" "}
                        </div>
                        <div className="col-2">
                            {" "}
                            <h4 style={{ color: "white" }}>Birth Year </h4> <p style={{ color: "white" }}>{learnMore.properties.birth_year} </p>{" "}
                        </div>
                        <div className="col-2">
                            {" "}
                            <h4 style={{ color: "white" }}>Gender</h4> <p style={{ color: "white" }}>{learnMore.properties.gender} </p>{" "}
                        </div>
                        <div className="col-2">
                            {" "}
                            <h4 style={{ color: "white" }}>Height </h4> <p style={{ color: "white" }}>{learnMore.properties.height} </p>{" "}
                        </div>
                        <div className="col-2">
                            {" "}
                            <h4 style={{ color: "white" }}>Skin Color</h4> <p style={{ color: "white" }}>{learnMore.properties.skin_color} </p>{" "}
                        </div>
                        <div className="col-2">
                            {" "}
                            <h4 style={{ color: "white" }}>Eye Color</h4>
                            <p style={{ color: "white" }}>{learnMore.properties.eye_color} </p>{" "}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LearnMore;
