<template>
  <div class="pdf-viewer">
    <iframe
      :src="pdfUrl"
      width="100%"
      height="600px"
      style="border: none;"
      title="PDF Viewer"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    pdfUrl: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.pdf-viewer {
  margin-top: 20px;
}
</style>
