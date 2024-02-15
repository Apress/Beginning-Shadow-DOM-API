<script>
  import Rate from "../lib/components/Rate.svelte";
</script>

<style>
  p {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<p>A Rate Web Component Demo</p>

<my-rating 
  length={5}
  ratedesc={['Very bad', 'Bad', 'Normal', 'Good', 'Very good']}
  showCount={true}>
</my-rating>