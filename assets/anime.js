import anime from 'animejs'

export function compositionCircle(line) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add(
		{
			targets: line,
			strokeDashoffset: [anime.setDashoffset, 0],
			easing: 'easeInOutSine',
			duration: 750,
			delay: anime.stagger(250),
		},
		0,
	).add(
		{
			targets: line,
			strokeDashoffset: [-10, anime.setDashoffset],
			easing: 'easeInOutSine',
			duration: 750,
		},
		1000,
	)
}
