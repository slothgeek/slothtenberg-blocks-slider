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
	const blockProps = useBlockProps.save( {
		className: 'splide__slide',
	} );

	let style = {
		borderRadius: attributes.borderRadius,
		overflow:"hidden"
	};

	if(attributes.backgroundColor){
		style = {...style, backgroundColor: attributes.backgroundColor}
	}
	if(attributes.textColor){
		style = {...style, color: attributes.textColor}
	}
	if(attributes.height != ''){
		style = {...style, height: attributes.height}
	}
	return (
		<li {...blockProps} style={style}>
			<InnerBlocks.Content />
		</li>
	);
}
