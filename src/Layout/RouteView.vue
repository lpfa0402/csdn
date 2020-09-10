<script>
export default {
  name: 'RouteView',
  data() {
    return {
    };
  },
  render() {
    return (
      <keep-alive>
        <router-view />
      </keep-alive>
    );
  }
};
</script>
