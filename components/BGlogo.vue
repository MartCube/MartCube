<template>
	<div class="composition">
		<svg width="320" height="320" viewBox="0 0 320 320">
			<path class="bg" d="M159.749 38.3182L281.082 159.652M159.749 38.3182L38.4153 159.652M159.749 38.3182L168.415 29.6515M159.749 38.3182L151.737 30.3251M281.082 159.652L159.749 280.985M281.082 159.652L289.749 150.985M281.082 159.652L290.413 168.983M159.749 280.985L38.4153 159.652M159.749 280.985L169.08 290.316M159.749 280.985L151.082 289.652M38.4153 159.652L29.7487 168.318M38.4153 159.652L30.4131 151.649M160.284 55.9676L264.284 159.968M160.284 55.9676L56.2837 159.968M160.284 55.9676L186.126 30.1257M160.284 55.9676L134.158 29.842M264.284 159.968L160.284 263.968M264.284 159.968L290.126 134.126M264.284 159.968L290.158 185.842M160.284 263.968L56.2837 159.968M160.284 263.968L186.158 289.842M160.284 263.968L134.126 290.126M56.2837 159.968L30.158 133.842M56.2837 159.968L30.1257 186.126M160 4L316 160L160 316L4 160L160 4ZM160.413 21.6494L299.08 160.316L160.413 298.983L21.7465 160.316L160.413 21.6494Z" />
			<path class="line red" d="M316 160L160 4L4 160L160 316L316 160Z" />
			<path class="line yellow" d="M264 160L160 56L56 160L160 264L264 160Z" />
		</svg>
	</div>
</template>

<script>
import { compositionCircle } from '~/assets/anime'
export default {
	mounted() {
		compositionCircle(document.querySelectorAll('.composition svg .line'))
	},
}
</script>

<style lang="scss" scoped>
.composition {
	position: relative;

	svg {
		position: relative;

		width: 320px;
		fill: none;
		path {
			stroke-width: 5;
		}
		.bg {
			stroke: $dark;
		}
		.line {
			stroke-width: 4;
			stroke-linecap: round;

			&.red {
				stroke: $red;
			}
			&.blue {
				stroke: $blue;
			}
			&.yellow {
				stroke: $yellow;
			}
			// stroke-dasharray: 882.4;
			// stroke-dashoffset: 882.4;
		}
	}
}
</style>
