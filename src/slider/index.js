/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	attributes:{
		type:{
			type:'string',
			default:'loop'
		},
		perPage:{
			type:'number',
			default:1
		},
		rewind:{
			type:'boolean',
			default:false
		},
		speed:{
			type:'number',
			default:400
		},
		rewindSpeed:{
			type:'number',
			default:500
		},
		rewindByDrag:{
			type:'boolean',
			default:true
		},
		width:{
			type:'string',
			default:'100%'
		},
		height:{
			type:'string',
			default:'420px'
		},
		start:{
			type:'number',
			default:0
		},
		perMove:{
			type:'number',
			default:1
		},
		padding:{
			type:'string',
			default:'0'
		},
		gap:{
			type:'string',
			default:'1em'
		},
		arrows:{
			type:'boolean',
			default:true
		},
		pagination:{
			type:'boolean',
			default:true
		},
		paginationDirection:{
			type:'string',
			default:'ltr'
		},
		drag:{
			type:'string',
			default:'true'
		},
		autoplay:{
			type:'boolean',
			default:true
		},
		interval:{
			type:'number',
			default:5000
		},
		pauseOnHover:{
			type:'boolean',
			default:true
		},
		lazyLoad:{
			type:'string',
			default:false
		},
		direction:{
			type:'string',
			default:'ltr'
		},
		perPageMedium:{
			type:'number',
			default:3
		},
		perPageSmall:{
			type:'number',
			default:1
		},
		autoScroll:{
			type:'boolean',
			default:false
		},
		autoScrollSpeed:{
			type:'number',
			default:2
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
