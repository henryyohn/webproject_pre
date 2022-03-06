/* eslint-disable indent */
<template>
  <div class="error">
    <slot :validate="validate"/>
    {{errorMsg}}
  </div>
</template>

<script>
/* eslint-disable indent */
export default {
    // eslint-disable-next-line vue/require-prop-types
    props: ['rules', 'value'],
    data() {
        return {
            errorMsg: ''
        }
    },
    methods: {
        validate() {
            // const res = this.rules.reduce((pre, curr) => {
            //     const check = curr && curr.test && curr.test(this.value)
            //     this.errorMsg = check ? curr.message : ''
            //     return pre && check
            // }, true)
            // return res
            for (let i = 0; i < this.rules.length; i++) {
                const element = this.rules[i]
                const check = element && element.test && element.test(this.value)
                if (check) {
                    this.errorMsg = check ? element.message : ''
                    return false
                }
            }
            this.errorMsg = ''
            return true
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>