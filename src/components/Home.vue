 <template>
  <div>
    <slot name="header"></slot>
  <h1 >This is Home Page</h1>
  <button @click="changename">click</button>
  <slot></slot>
  <button @click="ChangeFirstName">ChangeFirstName</button>

</div>
</template>

<script>
import { reactive } from 'vue';
export default {
  props: {
    userDetails: {
      required:true
    }
  },
  setup (props, context) {
    console.log(context);
    console.log(props.userDetails);
    const user = reactive(props.userDetails);
    function changename () {
      user.name ="Modified"
    }
    function ChangeFirstName () {
      context.emit("changeName", "Hello World")
    }
    return {
      ChangeFirstName,
      changename,
      user
    }
  }
  }
    
</script>

<style  scoped>


</style> 