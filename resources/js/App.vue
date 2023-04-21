<template>
    <div>
        <top-bar></top-bar>
        <side-bar></side-bar>
        <right-bar></right-bar>

        <div class="main-content">
            <div class="page-content">
                <div class="container-build">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>