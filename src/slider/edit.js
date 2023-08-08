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
import { useBlockProps, InspectorControls,useInnerBlocksProps,BlockControls } from '@wordpress/block-editor';
import {
	Panel,
	PanelBody,
	PanelRow,
	SelectControl,
	Icon,
	__experimentalUnitControl as UnitControl,
	__experimentalNumberControl as NumberControl,
	ToggleControl,
	ToolbarGroup,
	ToolbarButton
} from '@wordpress/components';

import { createBlock } from "@wordpress/blocks";

import { preformatted,plus } from '@wordpress/icons';


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
export default function Edit({clientId, attributes, setAttributes}) {

	const ALLOWED_BLOCKS = [ 'sg-block/slide' ];

	const { dispatch,select } = wp.data;

	const parentBlock = select( 'core/block-editor' ).getBlocksByClientId( clientId )[ 0 ];
	const childBlocks = parentBlock.innerBlocks;

	const blockProps = useBlockProps( { className: 'splide__track' } );
	const { children, ...innerBlocksProps } = useInnerBlocksProps(
		blockProps,
		{
			template: [ [ 'sg-block/slide', {} ] ],
			allowedBlocks: ALLOWED_BLOCKS
		}
	);

	const insertSlideBlock = () => {
		const innerCount = select("core/editor").getBlocksByClientId(clientId)[0].innerBlocks.length;
		let block = createBlock("sg-block/slide");
		dispatch("core/block-editor").insertBlock(block, innerCount, clientId);
	}

	const emptyBlock = () => {
		if ( childBlocks.length == 0){

			return(
				<div className="empty">
					<div className="header">
						<Icon icon={preformatted} />
						Block Slider
					</div>
					<p>{__('Add slides and design inside the content you want','slothtenberg-block-slider')}</p>
				</div>
			)
		}
	}

	const toolBar = () => {
		return (
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={ plus }
						label={ __('Add slide','slothtenberg-block-slider') }
						onClick={ () => insertSlideBlock() }
					/>
				</ToolbarGroup>
			</BlockControls>
		)
	}

	const settings = () => {
		return(
			<InspectorControls>
				<Panel>
					<PanelBody title={__('Basic', 'slothtenberg-block-slider')} initialOpen={ true }>
						<PanelRow className="select-full-width">
							<SelectControl
								label={__('Type', 'slothtenberg-block-slider')}
								value={ attributes.type }
								options={ [
									{ value: 'slide', label: __('Slide', 'slothtenberg-block-slider') },
									{ value: 'loop', label: __('Loop', 'slothtenberg-block-slider') },
									{ value: 'fade', label: __('fade', 'slothtenberg-block-slider') },
								] }
								onChange={ ( value ) => setAttributes({type: value}) }
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Slides per Page','slothtenberg-slider')}
								labelPosition="side"
								min={1}
								max={6}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes( { perPage: parseInt(value) } ) }
								value={ parseInt(attributes.perPage) }
								className="justify-space-between"
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Slides per Move','slothtenberg-slider')}
								labelPosition="side"
								min={1}
								max={6}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes( { perMove: parseInt(value) } ) }
								value={ parseInt(attributes.perMove) }
								className="justify-space-between"
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Speed','slothtenberg-slider')}
								labelPosition="side"
								onChange={ (value) => setAttributes( { speed: parseInt(value) } ) }
								value={ parseInt(attributes.speed) }
								className="justify-space-between"
							/>
						</PanelRow>
						<PanelRow className="unit-full-width">
							<UnitControl
								label={__('Gap', 'slothtenberg-block-slider')}
								labelPosition="side"
								value={ attributes.gap }
								onChange={ value => setAttributes({gap:value}) }
							/>
						</PanelRow>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Arrows','slothtenberg-slider')}
								checked={ attributes.arrows }
								onChange={ (value) => setAttributes( { arrows: value } ) }
							/>
						</PanelRow>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Pagination','slothtenberg-slider')}
								checked={ attributes.pagination }
								onChange={ (value) => setAttributes( { pagination: value } ) }
							/>
						</PanelRow>
						<PanelRow className="align-controls">
							<UnitControl
								label={__('Width', 'slothtenberg-block-slider')}
								value={ attributes.width }
								onChange={ value => setAttributes({width:value}) }
							/>
							<UnitControl
								label={__('Height', 'slothtenberg-block-slider')}
								value={ attributes.height }
								onChange={ value => setAttributes({height:value}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('Auto Play', 'slothtenberg-block-slider')} initialOpen={ false }>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Autoplay','slothtenberg-slider')}
								checked={ attributes.autoplay }
								onChange={ (value) => setAttributes( { autoplay: value } ) }
							/>
						</PanelRow>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Pause on Hover','slothtenberg-slider')}
								checked={ attributes.pauseOnHover }
								onChange={ (value) => setAttributes( { pauseOnHover: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Autoplay Interval','slothtenberg-slider')}
								labelPosition="side"
								onChange={ (value) => setAttributes( { interval: parseInt(value) } ) }
								value={ parseInt(attributes.interval) }
								className="justify-space-between"
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('More options', 'slothtenberg-block-slider')} initialOpen={ false }>
						<PanelRow className="unit-full-width">
							<UnitControl
								label={__('Padding', 'slothtenberg-block-slider')}
								labelPosition="side"
								value={ attributes.padding }
								onChange={ value => setAttributes({Padding:value}) }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Start','slothtenberg-slider')}
								labelPosition="side"
								min={1}
								max={childBlocks.length}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes( { start: parseInt(value) } ) }
								value={ parseInt(attributes.start) }
								className="justify-space-between"
							/>
						</PanelRow>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Rewind','slothtenberg-slider')}
								checked={ attributes.rewind }
								onChange={ (value) => setAttributes( { rewind: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Rewind Speed','slothtenberg-slider')}
								labelPosition="side"
								onChange={ (value) => setAttributes( { rewindSpeed: parseInt(value) } ) }
								value={ parseInt(attributes.rewindSpeed) }
								className="justify-space-between"
							/>
						</PanelRow>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Rewind by drag','slothtenberg-slider')}
								checked={ attributes.rewindByDrag }
								onChange={ (value) => setAttributes( { rewindByDrag: value } ) }
							/>
						</PanelRow>
						<PanelRow className="select-full-width">
							<SelectControl
								label={__('Pagination Direction', 'slothtenberg-block-slider')}
								value={ attributes.paginationDirection }
								options={ [
									{ value: 'ltr', label: __('Left to right', 'slothtenberg-block-slider') },
									{ value: 'rtl', label: __('Right to left', 'slothtenberg-block-slider') },
									{ value: 'ttb', label: __('Top to bottom', 'slothtenberg-block-slider') },
								] }
								onChange={ ( value ) => setAttributes({paginationDirection: value}) }
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow className="select-full-width">
							<SelectControl
								label={__('Direction', 'slothtenberg-block-slider')}
								value={ attributes.direction }
								options={ [
									{ value: 'ltr', label: __('Left to right', 'slothtenberg-block-slider') },
									{ value: 'rtl', label: __('Right to left', 'slothtenberg-block-slider') },
									{ value: 'ttb', label: __('Top to bottom', 'slothtenberg-block-slider') },
								] }
								onChange={ ( value ) => setAttributes({direction: value}) }
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow className="select-full-width">
							<SelectControl
								label={__('Drag', 'slothtenberg-block-slider')}
								value={ attributes.drag }
								options={ [
									{ value: 'true', label: __('Enabled', 'slothtenberg-block-slider') },
									{ value: 'false', label: __('Disabled', 'slothtenberg-block-slider') },
									{ value: 'free', label: __('Free', 'slothtenberg-block-slider') },
								] }
								onChange={ ( value ) => setAttributes({drag: value}) }
								__nextHasNoMarginBottom
							/>
						</PanelRow>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Lazy load','slothtenberg-slider')}
								checked={ attributes.lazyLoad }
								onChange={ (value) => setAttributes( { lazyLoad: value } ) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('Auto Scroll', 'slothtenberg-block-slider')} initialOpen={ false }>
						<PanelRow className="toggle-full-name">
							<ToggleControl
								label={__('Auto Scroll','slothtenberg-slider')}
								checked={ attributes.autoScroll }
								onChange={ (value) => setAttributes( { autoScroll: value } ) }
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Auto Scroll Speed','slothtenberg-slider')}
								labelPosition="side"
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes( { autoScrollSpeed: parseInt(value) } ) }
								value={ parseInt(attributes.autoScrollSpeed) }
								className="justify-space-between"
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title={__('Responsive', 'slothtenberg-block-slider')} initialOpen={ false }>
						<PanelRow>
							<NumberControl
								label={__('Slides per Page Medium','slothtenberg-slider')}
								labelPosition="side"
								min={1}
								max={6}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes( { perPageMedium: parseInt(value) } ) }
								value={ parseInt(attributes.perPageMedium) }
								className="justify-space-between"
							/>
						</PanelRow>
						<PanelRow>
							<NumberControl
								label={__('Slides per Page Small','slothtenberg-slider')}
								labelPosition="side"
								min={1}
								max={6}
								isShiftStepEnabled={ true }
								onChange={ (value) => setAttributes( { perPageSmall: parseInt(value) } ) }
								value={ parseInt(attributes.perPageSmall) }
								className="justify-space-between"
							/>
						</PanelRow>
					</PanelBody>
				</Panel>

			</InspectorControls>
		);
	}

	return (
		<div { ...useBlockProps() }>
			{ toolBar() }
			{ settings() }
			{ emptyBlock() }
			<div {...innerBlocksProps}>
				<ul className={`c${attributes.perPage}`} style={{gap:attributes.gap}}>
					{ children }
				</ul>
			</div>

		</div>
	);
}
