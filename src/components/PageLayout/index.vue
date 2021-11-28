<template>
  <div class="layout-container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.layout-container {
  width: 100%;
  height: 100%;
  .header,.body {
    width: 100%;
    padding: 10px;
  }
}
</style>