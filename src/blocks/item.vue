<template>
	<div class="pwPreview" @dblclick="open">
		<div class="item" @dblclick="open">
			<div>
				<div class="pwHeading">
					<div
						v-if="content.heading.length"
						@blur="update({ heading: $event.target.innerText });"
					>
						{{ content.heading }}
					</div>
					<div v-else class="placeholder">
						{{ $t('kirbyblock-featurelist.item.heading.placeholder') }}
					</div>
				</div>

				<div class="pwText">
					<div v-if="content.description" v-html="content.description"></div>
					<div v-else class="placeholder">
						{{ $t('kirbyblock-featurelist.item.description.placeholder') }}
					</div>
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
  font-weight: var(--font-normal);

  div.pwIcon {
    display: flex;
    flex: 0 0 60px;
    align-items: center;

    div {
      width: 50px;
      margin: auto;

      svg {
        width: 50px;
        height: 50px;
        fill: currentColor;
      }
    }
  }

  div.pwHeading {
    font-weight: var(--font-bold);
    font-size: var(--text-md);
    padding: var(--spacing-1) 0;
  }

	div.pwText {
		font-size: var(--text-sm);
		line-height: 1.2rem;
		opacity: 0.8;
		word-break: break-word;
		overflow-wrap: anywhere;
	}
}
</style>