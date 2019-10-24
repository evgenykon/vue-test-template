<template>
    <div>{{text}}</div>
</template>

<script>
export default {
    name: 'Sample',
    props: {
        text: {
            type: String,
            default: 'sample string'
        }
    }
}
</script>