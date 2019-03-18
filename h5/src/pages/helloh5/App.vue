<template>
  <div>
    helloh5
  </div>
</template>
<style scoped>

</style>
<script>
export default {
  events: {
    show () {
      alert('show')
    }
  },
  keyEvents: {
    backbutton () {
      this.$page.close()
    }
  }
}
</script>
