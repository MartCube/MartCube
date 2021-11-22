import anime from 'animejs'

export function compositionCircle(line) {
	const StartUpTimeline = anime.timeline({
		autoplay: true,
	})

	StartUpTimeline.add(
		{
			targets: line,
			strokeDashoffset: [anime.setDashoffset, 50],
			easing: 'easeInOutSine',
			duration: 750,
			delay: anime.stagger(250),
		},
		0,
	)
}
