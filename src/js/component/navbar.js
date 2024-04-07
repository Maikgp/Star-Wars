import React, { useContext } from "react";
import { Link } from "react-router-dom";
import startWarsimg from "../../img/start-wars.jpg";
import naveIcon from "../../img/naveIcon.png"; 
import { Context } from "../store/appContext.js";
import "../../styles/nav.css";
import "../../styles/global.css";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<nav className="navbar">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						{" "}
						<img
							src={startWarsimg}
							style={{ width: "60px", height: "10px," }}
							alt="Star Wars"
						/>{" "}
					</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown d-flex justify-content-center">
						<button
							className="btn btn-primary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
							style={{
								backgroundColor: "black",
								borderColor: "black",
								fontFamily: "Star Jedi, sans-serif"
							}}
						>
							Favorites:{" "}
							<span
								style={{
									color: "white",
									background: "black",
									border: "2px solid white",
									padding: "0.2rem 0.5rem",
									borderRadius: "0.5rem"
								}}
							>
								{store.favorites.length}
							</span>
						</button>

						<ul
							className="dropdown-menu"
							aria-labelledby="dropdownMenuButton1"
						>
							{store.favorites.length === 0 ? (
								<li key={0}>
									<div
										className="dropdown-item"
										style={{
											display: "flex",
											alignItems: "center"
										}}
									>
										No favorites{" "}
										<span
											style={{
												marginLeft: "0.5rem",
												width: "20px",
												height: "20px"
											}}
										>
											<img
												src={naveIcon}
												alt="Nave"
												style={{ width: "100%", height: "100%" }}
											/>
										</span>
									</div>
								</li>
							) : (
								store.favorites.map((item) => {
									return (
										<li
											key={item.uid}
											className="d-flex justify-content-between"
											style={{ width: "250px" }}
										>
											<span className="dropdown-item">
												{item.properties.name}
											</span>
											<span
												className="dropdown-item"
												onClick={() =>
													actions.deleteFavorite(
														item.uid
													)
												}
											>
												<img
													src={naveIcon}
													alt="Nave"
													style={{ width: "20px", height: "20px" }}
												/>
											</span>
										</li>
									);
								})
							)}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};
