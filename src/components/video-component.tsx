export default async function VideoComponent() {
	return (
		<iframe
			className="w-full aspect-video self-stretch md:min-h-96"
			src="https://www.youtube.com/embed/l56BCTMBH8s?si=P10SMf8tTbYIevs3&autoplay=1&loop=1&playlist=l56BCTMBH8s"
			frameBorder="0"
			title="Product Overview Video"
			aria-hidden="true"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		/>
	);
}
