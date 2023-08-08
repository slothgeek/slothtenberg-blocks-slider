/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps,InnerBlocks,InspectorControls } from '@wordpress/block-editor';
import {
	__experimentalUnitControl as UnitControl,
	Panel,
	PanelBody,
	PanelRow
} from '@wordpress/components';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({clientId,attributes,setAttributes}) {

	const { select } = wp.data;

	const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
	const childBlocks = parentBlock.innerBlocks;

	const emptyBlock = () => {
		if ( childBlocks.length == 0){

			return(
				<div className="block-slider">
					{ __( 'Add content to slide', 'easytours' ) }
				</div>
			)
		}
	}

	const setting = () => {
		return(
			<InspectorControls>
				<Panel>
					<PanelBody title={__('Slide settings', 'slothtenberg-block-slider')} initialOpen={ true }>
						<PanelRow className="unit-full-width">
							<UnitControl
								label={__('Border radius', 'slothtenberg-block-slider')}
								value={ attributes.borderRadius }
								onChange={ value => setAttributes({borderRadius:value}) }
							/>
						</PanelRow>
						<PanelRow className="unit-full-width">
							<UnitControl
								label={__('Height', 'slothtenberg-block-slider')}
								value={ attributes.height }
								onChange={ value => setAttributes({height:value}) }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>

		)
	}

	return (
		<li { ...useBlockProps() } style={{borderRadius: attributes.borderRadius, overflow:"hidden", height: attributes.height}}>
			{ setting() }
			{ emptyBlock() }
			<InnerBlocks />
		</li>
	);
}
