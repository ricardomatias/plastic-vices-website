"use client";

import React, { useEffect } from "react";
import Player from "@vimeo/player";

export const Vimeo = () => {
	useEffect(() => {
		var video01Player = new Player("embedded", {
			loop: true,
			width: 1024,
			height: 1024,
			autoplay: true,
			controls: false,
			muted: true,
		});

		video01Player.on("loaded", function () {
			video01Player.play();
		});
	}, []);
	return (
		<div
			className="md:h-1/2"
			data-vimeo-url="https://vimeo.com/1049761027/4da1a9e338?share=copy"
			id="embedded"
		></div>
	);
};
