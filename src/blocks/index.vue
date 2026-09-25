<template>
	<div
		class="pwPreview"
		data-kirbyblock="featurelist"
		@dblclick="open"
		:style="colorVars"
		:data-margintop="content.margintop === true ? 'true' : null"
		:data-marginbottom="content.marginbottom === true ? 'true' : null"
		>

		<pwBlockinfo
			:value="$t('kirbyblock-featurelist.name')"
			icon="featurelist"
		/>

		<div class="pwGrid">
			<div
				class="pwGridItem"
				:style="gridVars"
				:data-paddingtop="content.paddingtop || defaults['padding-top'] || null"
				:data-paddingright="(content.paddingright !== undefined ? content.paddingright : defaults['padding-right']) === true ? 'true' : null"
				:data-paddingbottom="content.paddingbottom || defaults['padding-bottom'] || null"
				:data-paddingleft="(content.paddingleft !== undefined ? content.paddingleft : defaults['padding-left']) === true ? 'true' : null"
				>

				<div class="contents pwLayout" :data-layout="sectionLayout">

					<!-- Intro (left column in the split layout) -->
					<div class="pwIntro">
						<!-- Tagline -->
						<pwTagline v-if="settings.tagline" :value="content.tagline" :alignDefault="fieldDefaults['align-tagline']" />

						<!-- Heading -->
						<pwHeading v-if="settings.heading" :value="content.heading" :data-level="content.level" :alignDefault="fieldDefaults['align-heading']" :sizeDefault="fieldDefaults['size-heading']" :textbackgroundDefault="fieldDefaults['textbackground-heading']" :multilineDefault="fieldDefaults['multiline-heading']" :flourishDefault="fieldDefaults['flourish-heading']" />

						<!-- Editor -->
						<pwEditor v-if="settings.editor" :content="content" :alignDefault="fieldDefaults['align-editor']" />
					</div>

					<!-- Features (approximate: icon position, tile, run-in title) -->
					<div v-if="blockItems.length" class="pwFeatures"
						:data-align="content.blocksalignment || fieldDefaults['align-blocks']"
						:data-icon-position="defaults['item-icon-position'] || 'left'"
						:data-title-style="defaults['item-title-style'] || 'above'">
						<div v-for="item in blockItems" :key="item.id" class="pwFeature" :class="{'ishidden': item.isHidden}">
							<div v-if="item.content.icon" class="pwIcon" :style="iconStyle" v-html="item.content.icon"></div>
							<div class="pwContent">
								<template v-if="(defaults['item-title-style'] || 'above') === 'inline'">
									<div class="pwText"><strong v-if="item.content.heading">{{ item.content.heading }}. </strong><span v-html="plainText(item.content.description)"></span></div>
								</template>
								<template v-else>
									<div class="pwHeading" v-if="item.content.heading">{{ item.content.heading }}</div>
									<div class="pwText" v-if="item.content.description" v-html="item.content.description"></div>
								</template>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import pwBlockinfo from '@/../../kirby-pagewizard/src/components/blockinfo.vue';
import pwTagline from '@/../../kirby-pagewizard/src/components/tagline.vue';
import pwHeading from '@/../../kirby-pagewizard/src/components/heading.vue';
import pwEditor from '@/../../kirby-pagewizard/src/components/editor.vue';
import pwGridStyle from '@/../../kirby-pagewizard/src/mixins/gridStyle.js';
import pwColorStyle from '@/../../kirby-pagewizard/src/mixins/colorStyle.js';

export default {
	components: {
		pwBlockinfo,
		pwTagline,
		pwHeading,
		pwEditor
	},
	mixins: [pwGridStyle, pwColorStyle],
	data() {
		return {
			settings: {},
			fieldDefaults: {},
			defaults: {},
			blockValues: null
		}
	},
	computed: {
		blockItems() {
			try {
				const raw = this.content.blocks;
				if (!raw) return [];
				return typeof raw === 'string' ? JSON.parse(raw) : raw;
			} catch(e) {
				return [];
			}
		},
		sectionLayout() {
			return this.content.sectionlayout || this.defaults['section-layout'] || 'stacked';
		},
		// Icon colour and (for the tile style) tile colour/radius from the Project Wizard
		iconStyle() {
			const theme = this.content.theme || 'default';
			const colors = this.blockValues?.defaults?.items?.colors || {};
			const themeOv = (this.blockValues?.overrides || {})[theme] || {};
			const pick = name => themeOv[name] || colors[name]?.[theme] || null;
			const style = {};
			const fill = pick('item-icon-fill');
			if (fill) style['--pwfeaturelist-preview-icon-fill'] = fill;
			if ((this.defaults['item-icon-style'] || 'plain') === 'tile') {
				const vars = this.blockValues?.defaults?.items?.vars || {};
				const ov = this.blockValues?.overrides || {};
				style.backgroundColor = pick('item-icon-tile-background');
				const shape = this.defaults['item-shape'] || 'custom';
				const radius = Array.isArray(ov['item-radius']) ? ov['item-radius'] : (vars['item-radius']?.value || []);
				style.borderRadius = shape === 'round' ? '50%'
					: shape === 'square' ? '0'
					: [radius[0], radius[1], radius[3], radius[2]].map(r => r || '0').join(' ');
				style.padding = '0.4rem';
			}
			return style;
		}
	},
	async created() {
		try {
			const response = await this.$api.get('pagewizard/settings/pwfeaturelist');
			this.settings = response.settings;
			this.fieldDefaults = response.fields || {};
			this.defaults = response.defaults || {};
			this.blockValues = await this.$api.get('projectwizard/values/pwfeaturelist');
		} catch (e) {
			this.settings = {};
		}
	},
	methods: {
		// Run-in title: the description without block tags, so title and text share a line
		plainText(html) {
			return (html || '').replace(/<\/?(p|ul|ol|li)[^>]*>/g, ' ').trim();
		}
	}
}
</script>

<style scoped>
/* Split layout: intro left, features right */
div.pwLayout[data-layout="split"] {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 1.5rem;
	align-items: start;
}
div.pwFeatures {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 1rem;
}
div.pwLayout[data-layout="split"] div.pwFeatures {
	margin-top: 0;
}
div.pwFeature {
	display: flex;
	gap: 0.75rem;
	align-items: flex-start;
}
div.pwFeatures[data-icon-position="top"] div.pwFeature {
	flex-direction: column;
	gap: 0.5rem;
}
div.pwFeature.ishidden {
	opacity: 0.4;
}
div.pwIcon {
	flex-shrink: 0;
	display: flex;
}
div.pwIcon :deep(svg) {
	width: 32px;
	height: 32px;
	fill: var(--pwfeaturelist-preview-icon-fill, var(--pw-color-icon, currentColor));
}
div.pwHeading {
	font-weight: var(--font-bold);
}
div.pwText {
	opacity: 0.8;
	font-size: var(--text-sm);
}
</style>
