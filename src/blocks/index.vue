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
				:data-paddingtop="content.paddingtop === true ? 'true' : null"
				:data-paddingright="content.paddingright === true ? 'true' : null"
				:data-paddingbottom="content.paddingbottom === true ? 'true' : null"
				:data-paddingleft="content.paddingleft === true ? 'true' : null"
				>

				<!-- Tagline -->
				<pwTagline v-if="settings.tagline" :value="content.tagline" :alignDefault="fieldDefaults['align-tagline']" />

				<!-- Heading -->
				<pwHeading v-if="settings.heading" :value="content.heading" :data-level="content.level" :alignDefault="fieldDefaults['align-heading']" />

				<!-- Editor -->
				<pwEditor v-if="settings.editor" :content="content" :alignDefault="fieldDefaults['align-editor']" />

				<!-- Blocks -->
				<div v-if="blockItems.length" class="pwItems" :data-align="content.blocksalignment || fieldDefaults['align-blocks']">
					<div v-for="item in blockItems" :key="item.id" class="pwItem" :class="{'ishidden': item.isHidden}">
						<div v-if="item.content.icon" class="pwIcon" v-html="item.content.icon"></div>
						<div class="pwContent">
							<div class="pwHeading" v-if="item.content.heading">{{ item.content.heading }}</div>
							<div class="pwText" v-if="item.content.description" v-html="item.content.description"></div>
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
			fieldDefaults: {}
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
		}
	},
	async created() {
		try {
			const response = await this.$api.get('pagewizard/settings/pwfeaturelist');
			this.settings = response.settings;
			this.fieldDefaults = response.fields || {};
		} catch (e) {
			this.settings = {};
		}
	}
}
</script>

<style scoped>
div.pwItems {
	padding: var(--spacing-4) 0;
	display: flex;
	flex-direction: column;
	gap: var(--spacing-6);

	div.pwItem {
		display: flex;
		gap: var(--spacing-4);
		align-items: flex-start;

		div.pwIcon {
			flex-shrink: 0;
			color: var(--pw-color-text, inherit);
		}
		div.pwHeading {
			font-weight: var(--font-bold);
    	font-size: var(--text-md);
			margin-bottom: var(--spacing-1);
			color: var(--pw-color-heading, inherit);
		}
		div.pwText {
			font-size: var(--text-sm);
			line-height: 1.2rem;
			opacity: 0.8;
			word-break: break-word;
			overflow-wrap: anywhere;
			color: var(--pw-color-text, inherit);
		}
	}
}

div.pwIcon :deep(svg) {
	width: 50px;
	height: 50px;
	fill: var(--pw-color-icon, inherit);
}
</style>
