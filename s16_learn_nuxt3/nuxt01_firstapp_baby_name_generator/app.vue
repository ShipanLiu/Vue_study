<script setup>
// save all your 3 options into a object, nuxt3 wil import automatically
const options = reactive({
  gender: "Unisex",
  popularity: "Unique",
  length: "Long",
});
</script>

<template>
  <div class="container">
    <h1>Baby Name Generator</h1>
    <p>choose options ===> click "findname"</p>
    <div class="options-container">
      <div class="sub-options-container">
        <h4>1) choose a gender</h4>
        <div class="option-buttons-container">
          <button
            :class="options.gender === 'Boy' && 'btn-active'"
            class="option-btn option-btn-left"
          >
            Boy
          </button>
          <button
            :class="{ 'btn-active': options.gender === 'Unisex' }"
            class="option-btn"
          >
            Unisex
          </button>
          <button
            :class="{ 'btn-active': options.gender === 'Girl' }"
            class="option-btn option-btn-right"
          >
            Girl
          </button>
        </div>
      </div>
      <div class="sub-options-container">
        <h4>2) choose the name popularity</h4>
        <div class="option-buttons-container">
          <button
            :class="options.popularity === 'Trendy' && 'btn-active'"
            class="option-btn option-btn-left"
          >
            Trendy
          </button>
          <button
            :class="options.popularity === 'Unique' && 'btn-active'"
            class="option-btn option-btn-right"
          >
            Unique
          </button>
        </div>
      </div>
      <div class="sub-options-container">
        <h4>3) choose the name length</h4>
        <div class="option-buttons-container">
          <button
            :class="options.length === 'Long' && 'btn-active'"
            class="option-btn option-btn-left"
          >
            Long
          </button>
          <button
            :class="options.length === 'All' && 'btn-active'"
            class="option-btn"
          >
            All
          </button>
          <button
            :class="options.length === 'Short' && 'btn-active'"
            class="option-btn option-btn-right"
          >
            Short
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(27, 60, 138);
  max-width: 60rem;
  /* make the text inside of container center */
  text-align: center;
  margin: 0 auto;
  /* Flexbox properties to center children */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Set the container height to 100% of the viewport height */
}

.container h1 {
  font-size: 3rem;
}

.options-container {
  background-color: rgb(255, 238, 236);
  border-radius: 2rem;
  padding: 1rem;
  width: 95%;
  margin: 0 auto;
  margin-top: 4rem;
  /*Child Elements with Absolute Positioning:
  If any child elements inside the .options-container have position: absolute;
   then they will be  positioned relative to the nearest positioned ancestor.
   If .options-container has position: relative;, it becomes that ancestor,
   allowing you to position the child elements relative to it. Without position: relative;
   these child elements would be positioned relative to the document or the nearest positioned
    ancestor further up the DOM.*/
  position: relative;
}

.sub-options-container {
  margin-bottom: 2rem;
}

.option-buttons-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.option-btn {
  height: 2rem;
  width: 8rem;
  font-size: 1rem;
  color: rgb(27, 60, 138);
  font-weight: 200;

  cursor: pointer;
  text-decoration: none;

  /*这个定义牛逼, center the text inside of the buttons*/
  display: flex;
  align-items: center;
  justify-content: center;

  /*define outline*/
  outline: 0.15rem solid rgb(249, 87, 89);
  /*因为 outline + border 会不好看*/
  border: none;

  padding: 0.8rem;
}

.option-btn-left {
  border-radius: 0.5rem 0 0 0.5rem;
}

.option-btn-right {
  border-radius: 0 0.5rem 0.5rem 0;
}

.btn-active {
  background-color: #f84447;
  color: white;
}
</style>
