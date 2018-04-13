<template>
    <div>
        <cms-error icon='ele-icon-403' tips-text='无权限查看当前页面~~~'></cms-error>
    </div>
</template>

<script>
import error from '@/components/error'
export default {
  name: 'error-403',
  components: {
    'cms-error': error
  }
}
</script>
