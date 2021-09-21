<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {

  data: () => ({
    apiDomain : 'http://demo-api-vue.sanbercloud.com',
    blogs: [],
  }),

  created(){
    const config = {
      method: 'get',
      url : this.apiDomain + '/api/v2/blog/random/4'
    }

    this.axios(config)
    .then(response => {
      let {blogs} = response.data;
      this.blogs = blogs;

    })
    .cath(error =>{

      console.log(error);
    });
  }
};
</script>

