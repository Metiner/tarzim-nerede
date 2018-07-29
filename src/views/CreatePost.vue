<template>
    <div class="create-post">
        <app-header></app-header>
        <div class="upload">
            <span class="create-post-text"> FOTOGRAF</span>
            <div class="upload-photo-container">
                <img id="taken-photo">
                <div class="upload-photo-button" type="button" @click="takePhoto">
                    <img class="upload-photo-button-image" src="../assets/SVG/camera.svg">
                    <input class="take-photo" type="file" accept="image/*" capture>
                </div>
            </div>
        </div>
        <div class="seperator">
            <img src="../assets/SVG/seperator.svg">
        </div>
        <div class="upload">
            <span class="create-post-text"> KONUM</span>
            <div class="upload-location-container">
                <div id="location"></div>
                <div class="upload-location-button" type="button" @click="takePhoto">
                    <img @click="geoFindMe" class="upload-location-button-image" src="../assets/SVG/location.svg">
                </div>
            </div>
        </div>
        <div class="seperator">
            <img src="../assets/SVG/seperator.svg">
        </div>
        <div class="upload">
            <span class="create-post-text"> BEDEN</span>
            <div class="size-container">
                <div class="size-box" @click="activeSize='xs'" :class="{'size-box-selected': activeSize === 'xs'}">
                    <span>XS</span>
                </div>
                <div class="size-box" @click="activeSize='s'" :class="{'size-box-selected': activeSize === 's'}">
                    <span>S</span>
                </div>
                <div class="size-box" @click="activeSize='m'" :class="{'size-box-selected': activeSize === 'm'}">
                    <span>M</span>
                </div>
                <div class="size-box" @click="activeSize='l'" :class="{'size-box-selected': activeSize === 'l'}">
                    <span>L</span>
                </div>
                <div class="size-box" @click="activeSize='xl'" :class="{'size-box-selected': activeSize === 'xl'}">
                    <span>XL</span>
                </div>
            </div>
        </div>
        <div class="seperator">
            <img src="../assets/SVG/seperator.svg">
        </div>
        <div class="upload">
            <span class="create-post-text"> MARKA</span>
            <div class="brand-container">
                <input class="brand-input" type="text">
            </div>
        </div>
        <div class="seperator">
            <img src="../assets/SVG/seperator.svg">
        </div>
        <div class="colour-quantity">
            <div class="colour-container">
                <span class="create-post-text"> RENK</span>
                <div class="brand-container">
                    <input class="brand-input" type="text">
                </div>
            </div>
            <div class="quantity-container">
                <span class="create-post-text"> ADET</span>
                <div class="brand-container">
                    <input class="brand-input" type="number">
                </div>
            </div>
        </div>
        <div class="seperator">
            <img src="../assets/SVG/seperator.svg">
        </div>
        <div class="upload">
            <div class="create-button-container">
                <img class="create-button-image" src="../assets/SVG/createButton.svg">
                <span class="create-button-text">YARAT</span>
            </div>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header.vue'
    export default {
        name: "createPost",
        data () {
            return {
                takenPhoto: '',
                activeSize: 'xs'
            }
        },
        components: {
          'app-header': Header
        },
        methods: {
            takePhoto: () => {

                let input = document.querySelector('input[type=file]'); // see Example 4

                input.onchange = function () {
                    let file = input.files[0];

                    displayAsImage(file); // see Example 7
                };

                function displayAsImage(file) {
                    let imgURL = URL.createObjectURL(file),
                        img = document.getElementById('taken-photo');

                    img.onload = function() {
                        URL.revokeObjectURL(imgURL);
                    };

                    img.src = imgURL;
                }
            },
            geoFindMe(){
                let location = document.getElementById("location");

                if (!navigator.geolocation){
                    console.log("Geolocation is not supported by your browser")
                    return;
                }

                function success(position) {
                    let latitude  = position.coords.latitude;
                    let longitude = position.coords.longitude;


                    let img = new Image();
                    img.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=15&size=300x300&sensor=false&key=AIzaSyCXpRW3Ms9iZ6FfUslL_xLDZ40jfyI5E4Q";

                    location.appendChild(img);
                }

                function error() {
                    console.log("Unable to retrieve your location")
                }


                navigator.geolocation.getCurrentPosition(success, error);
            }
        }

    }
</script>
<style lang="scss" scoped>
    .upload{
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin-top: 10px;
    }
    .colour-quantity{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 10px;
        margin-top: 10px;
    }
    .create-post-text{
        margin-left: 10px;
        font-size: 15px;
        letter-spacing: 2.1px;
    }
    .upload-photo-container{
        border: 5px solid #4c4c4c;
        height: 200px;
        margin: 0 10px 10px 10px;
        background-color: lightgray;
        display: grid;
        justify-content: center;
        grid-template-columns: min-content;
    }
    .upload-location-container{
        border: 5px solid #4c4c4c;
        margin: 0 10px 10px 10px;
        background-color: lightgray;
        display: grid;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .upload-photo-button {
        max-height: 100px;
        max-width: 100px;
        align-self: center;
        justify-self: center;
        display: grid;
        grid-row:1/2;
        grid-column:1;
    }
    .upload-location-button {
        max-height: 50px;
        max-width: 50px;
        align-self: center;
        justify-self: center;
        display: grid;
        grid-row:1/2;
        grid-column:1;
        margin: 20px;
    }
    .upload-photo-button-image{
        width: 100px;
        height: 100px;
        grid-row:1/2;
        grid-column:1;
    }
    .upload-location-button-image{
        width: 50px;
        height: 50px;
        grid-row:1/2;
        grid-column:1;
    }
    .take-photo{
        grid-row: 1/2;
        grid-column: 1;
        align-self: center;
        opacity: 0;
        font-size: 40px;
        max-width: 100px;
    }
    #taken-photo{
        grid-row: 1/2;
        grid-column: 1;
        width: inherit;
        height: inherit;
    }
    #location{
        grid-row: 1/2;
        grid-column: 1;
    }
    .seperator{
        margin: 0 10px 10px 10px;
    }
    .size-container{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        justify-content: space-between;
        column-gap: 25px;
        margin: 0 10px 10px 10px;
    }
    .size-box{
        text-align: center;
        border:3px solid #4c4c4c;
        padding: 5px;
    }
    span{
        vertical-align: -moz-middle-with-baseline;
        font-weight: bold;
    }
    .size-box-selected{

        text-align: center;
        background-color: #4c4c4c;
        border:3px solid #4c4c4c;
        padding: 5px;

        span{
            color: white !important;
        }

    }
    .brand-container{
        margin: 0 10px 10px 10px;
    }
    .brand-input{
        border-bottom: 1px solid #4c4c4c !important;
        border: 0px;
        border-bottom-color: currentcolor;
        border-bottom-style: none;
        border-bottom-width: 0px;
        font-family: coco-bold;
        letter-spacing: 2px;
        width: 100%;
        font-size: 20px;
    }
    .create-button-container{
        margin: 0 10px 10px 10px;
        display: grid;
    }
    .create-button-text{
        color: white;
        grid-row: 1/2;
        grid-column: 1;
        justify-self: center;
        align-self: center;
        font-size: 30px;
        margin-top: 6px;
    }
    .create-button-image{
        grid-row: 1/2;
        grid-column: 1;
    }
</style>