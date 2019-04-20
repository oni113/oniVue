<template lang="html">
    <div class="hello">
        <h1>{{msg}}</h1>
        <h2>목표</h2>
        <ul>
            <li>1. Drag &amp; Drop</li>
            <li>2. ajax form submit</li>
        </ul>
        <div class="dropbox">
            <input type="file" name="myFile" @change="upload($event.target.name, $event.target.files)" @drop="upload($event.target.name, $event.target.files)" value="">
            <h2>파일을 드래그해서 드랍해주세요.</h2>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg : ''
        }
    },
    methods : {
        upload(name, files) {
            console.log(name);
            console.log(files);
            const formData = new FormData();
            formData.append(name, files[0], files[0].name);
            console.log(formData);
            //TODO : upload REST
            /*
            const uploadURI = '/api/upload';
            axios.post(url, formData).then(response => {
                console.log(response);
            });
            */
        }
    }
}
</script>

<style lang="css" scoped>
.dropbox {
    outline: 2px dashed #aaa;
    background: #7fb4dd;
    width: 300px;
    height: 300px;
    position: relative;
     margin: 0 auto;
  }
  .dropbox > h2{
    position: absolute;
    top: 50px;
    left: 0;
    z-index: 2;
  }
  .input-file{
    position: absolute;
    opacity: 0;
    width:100%;
    height:100%;
    top:0;
    left:0;
     z-index: 3;
  }
</style>
