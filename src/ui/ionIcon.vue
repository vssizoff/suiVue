<script>
export default {
  name: "IonIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    alt: String
  }
}
</script>

<template>
<img :src="`https://unpkg.com/ionicons@7.3.1/dist/ionicons/svg/${name}.svg`" :alt="alt ?? name"/>
</template>