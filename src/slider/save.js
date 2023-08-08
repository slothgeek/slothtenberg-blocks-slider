/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {

	let data = {
		type: attributes.type,
		perPage: attributes.perPage,
		rewind: attributes.rewind,
		speed: attributes.speed,
		rewindSpeed: attributes.rewindSpeed,
		rewindByDrag: attributes.rewindByDrag,
		width: attributes.width,
		height: attributes.height,
		start: attributes.start,
		perMove: attributes.perMove,
		gap: attributes.gap,
		arrows: attributes.arrows,
		pagination: attributes.pagination,
		paginationDirection: attributes.paginationDirection,
		drag: attributes.drag != 'free' ? attributes.drag == 'true' : attributes.drag,
		autoplay: attributes.autoplay,
		interval: attributes.interval,
		pauseOnHover: attributes.pauseOnHover,
		lazyLoad: attributes.lazyLoad,
		direction: attributes.direction,
		breakpoints: {
			900: {
				perPage: attributes.perPageMedium,
			},
			600: {
				perPage: attributes.perPageSmall,
			}
		}
	}

	if(attributes.autoScroll){
		data = {...data, autoScroll: { speed: attributes.autoScrollSpeed }}
	}

	const blockProps = useBlockProps.save( {
		className: 'splide'
	} );

	return (
		<div {...blockProps} data-splide={JSON.stringify(data)}>
			<div className="splide__track">
				<ul className="splide__list">
					<InnerBlocks.Content />
				</ul>
			</div>
		</div>
	);
}
