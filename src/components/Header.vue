<template>
    <div class="header">
        <div class="toggle">
            <img src="../assets/SVG/toggleMenu.svg">
        </div>
        <div class="logo">
            <span class="logo-text">BENIM TARZIM</span>
        </div>
        <div class="seperator">
            <img src="../assets/SVG/seperator.svg">
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss" scoped>
    .header{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .toggle{
        max-width: 30px;
        max-height: 30px;
        margin-left: 10px;
    }
    .logo-text{
        font-size: 40px;
        white-space: nowrap;
    }
    .logo{
        margin-top: 10px;
        justify-self: center;
    }
    .seperator{
        grid-row: 2;
        grid-column: 1/4;
    }
</style>
