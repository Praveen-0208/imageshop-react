import React from "react";
import { photoscol1, photoscol2 } from "../PhotoData";

import Base from "./Base";
import ImageDisplay from "./ImageDisplay";

const Home = () => {
	return (
		<Base>
			<section className=" jumbotron jumbotron-fluid " id="jumbo">
				<div className="container">
					<div className="row p-5">
						<div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2">
							<p
								className="text-white text-center my-3"
								style={{
									fontSize: "3rem",
									textShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
								}}
							>
								Eye Catching Pics
							</p>
							<hr style={{ background: "#ffffff" }} />
							<p
								className="text-white text-center"
								style={{
									fontSize: "2rem",
									textShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
								}}
							>
								From the best across the globe
							</p>
						</div>
					</div>
				</div>
				<p className="text-muted  text-right mb-1 mr-2">
					Photo by Krivec Ales from Pexels
				</p>
			</section>
			<div className="container">
				<div className="row">
					<div className="col-sm-12 col-lg-6 p-2">
						{photoscol1 &&
							photoscol1.map((photo, index) => {
								return <ImageDisplay key={index} photo={photo} />;
							})}
					</div>
					<div className="col-sm-12 col-lg-6 p-2">
						{photoscol2 &&
							photoscol2.map((photo, index) => {
								return <ImageDisplay key={index} photo={photo} />;
							})}
					</div>
				</div>
			</div>
		</Base>
	);
};

export default Home;
