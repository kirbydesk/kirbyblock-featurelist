// Blocks
import pwfeaturelist from "@/blocks/index.vue";
import pwfeaturelistitem from "@/blocks/item.vue";

// Render
panel.plugin("kirbydesk/kirbyblock-featurelist", {
	blocks: {
		pwfeaturelist:     pwfeaturelist,
		pwfeaturelistitem: pwfeaturelistitem,
  }
});
