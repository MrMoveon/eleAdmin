<template>
    <div>
        <cms-error icon='ele-icon-500' tips-text='系统出错了~~~'></cms-error>
    </div>
</template>

<script>
import error from '@/components/error'
export default {
  name: 'error-500',
  components: {
    'cms-error': error
  }
}
</script>
