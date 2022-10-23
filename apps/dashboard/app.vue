<template>
  <div>
    <h1>Welcome to the homepage {{ cookie }}</h1>
  </div>
</template>

<script>
import { cookie } from '@venopi/utils';

export default {
    auth: false,
    components: { cookie },
};
</script>