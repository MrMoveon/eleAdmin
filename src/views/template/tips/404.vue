<template>
    <div>
        <cms-error icon='ele-icon-404' tips-text='莫有办法,找不到这个页面~~~'></cms-error>
    </div>
</template>

<script>
import error from '@/components/error'
export default {
  name: 'error-404',
  components: {
    'cms-error': error
  }
}
</script>
