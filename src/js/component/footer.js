import React from "react";

export const Footer = () => (
    <footer className="footer py-3 text-center" style={{ color: "white", position: "sticky", bottom: 0, left: 0, width: "100%", zIndex: 1000 }}>
        <p>
            <span style={{ color: "yellow" }}>Made with</span>{" "}
            <i className="fa fa-heart" style={{ color: "red" }} />
            <a href="https://github.com/Maikgp" style={{ color: "yellow", textDecoration: "none" }}> 
                <span style={{ color: "yellow" }}> by Maikgp</span>
            </a>
        </p>
    </footer>
);