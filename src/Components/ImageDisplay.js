import React, { useContext, useEffect, useState } from "react";
import { FaPlusCircle, FaTrash } from "react-icons/fa";
import cartcontext from "../Context/cartContext";

const ImageDisplay = ({ photo }) => {
	const [reload, setReload] = useContext(cartcontext);

	const [flag, setFlag] = useState("undefined");

	const itemInCart = (id) => {
		let cart = [];
		if (localStorage.getItem("cart")) {
			cart = JSON.parse(localStorage.getItem("cart"));
			cart.find((photo) => {
				if (photo.id === id) {
					setFlag("remove");
				}
			});
		}
	};

	useEffect(() => {
		itemInCart(photo.id);
	}, [photo.id]);

	const addToCart = () => {
		let cart = [];
		if (typeof window !== undefined) {
			if (localStorage.getItem("cart")) {
				cart = JSON.parse(localStorage.getItem("cart"));
			}
			cart.push({
				...photo,
			});
		}
		localStorage.setItem("cart", JSON.stringify(cart));

		setFlag("remove");
		setReload(!reload);
	};

	const removeFromCart = (photoId) => {
		let cart = [];
		if (typeof window !== undefined) {
			if (localStorage.getItem("cart")) {
				cart = JSON.parse(localStorage.getItem("cart"));
			}
			cart.map((product, index) => {
				if (product.id === photoId) {
					cart.splice(index, 1);
				}
			});

			localStorage.setItem("cart", JSON.stringify(cart));

			setFlag("add");
			setReload(!reload);
		}
	};

	return (
		<div id="imagediv" key={photo.id}>
			<img
				className="mb-2"
				src={photo.source}
				style={{ width: "100%" }}
				alt="..."
			/>
			<div className="col-6 offset-3 mb-3 buttons">
				<p
					className="text-center"
					style={{
						textShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
					}}
				>
					&#8377;{photo.price}
				</p>
			</div>
			{flag === "remove" ? (
				<div className="col-8 offset-2 mb-3 buttons">
					<button
						className="btn btn-block btn-outline-warning"
						style={{
							boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
						}}
						onClick={() => {
							removeFromCart(photo.id);
						}}
					>
						<p className="text-center">
							Remove From Cart{" "}
							<FaTrash
								style={{
									color: "#76a7c5",
									transform: "scale(1.2)",
								}}
							/>
						</p>
					</button>
				</div>
			) : (
				<div className="col-8 offset-2 mb-3 buttons">
					<button
						className="btn btn-block btn-outline-success"
						style={{
							boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.73)",
						}}
						onClick={() => {
							addToCart(photo);
						}}
					>
						<p className="text-center">
							Add To Cart{" "}
							<FaPlusCircle
								style={{
									color: "#76a7c5",
									transform: "scale(1.2)",
								}}
							/>
						</p>
					</button>
				</div>
			)}
			<div className="col-10 offset-1 mb-3 buttons">
				<p className="text-muted text-center">{photo.artist}</p>
			</div>
		</div>
	);
};

export default ImageDisplay;
