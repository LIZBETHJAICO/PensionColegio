<template>
    <div>
        dgdg
        <p>{{users.email}}</p>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(["users"])
    }
}
</script>