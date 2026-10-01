<template>
	<div class="pwPreview" @dblclick="open">
		<div class="item" @dblclick="open">
			<div v-if="content.icon" class="pwIcon">
				<div v-html="content.icon"></div>
			</div>
			<div>
				<!-- (only what is filled in: no placeholders) -->
				<div v-if="content.heading" class="pwHeading">{{ content.heading }}</div>

				<div v-if="content.description" class="pwText">
					<div v-html="content.description"></div>
				</div>

			</div>
		</div>
	</div>
</template>

<style scoped>
div.item {
  display: flex;
  gap: var(--spacing-4);
	padding: var(--spacing-2);
  flex-wrap: nowrap;
	font-size: var(--text-sm);

  div.pwIcon {
    flex: 0 0 60px;
    align-self: flex-start;

    div {
      width: 50px;
    }
		:deep(svg) {
			width: 50px;
			height: 50px;
			fill: currentColor;
			opacity: 0.5;
		}
  }

  /* (a step larger than the text: stands out from bold in it) */
  div.pwHeading {
    font-size: var(--text-md);
    font-weight: var(--font-bold);
    padding: var(--spacing-1) 0;
  }

	div.pwText {
		line-height: 1.2rem;
		opacity: 0.8;
		word-break: break-word;
		overflow-wrap: anywhere;
	}
}
</style>