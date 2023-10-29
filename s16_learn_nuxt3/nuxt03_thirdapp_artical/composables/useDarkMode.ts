/*
create a folder names "composables", this is important for Nuxt

what is composables:

globallly store our "state" or "fucntions"

*/


const useDarkMode = () => {
  /*
  const isDarkMode = ref(false); 你可能会这样 定义， 但是这样的 should only be used inside of script setup 标签的修饰下进行, if not there will be memory leaks

  */

  // useState allow us to store state. "useState" is not from Vue3, but from Nuxt3
  // 可以把“useState” 当成 “ref” 的兄弟， 有相同的 功能。
  const isDarkMode = useState("darkMode", () => false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  };

  return {
    isDarkMode,
    toggleDarkMode,
  };
};

// 把useDarkMode 函数指针 export出去， 使用的时候：const { isDarkMode } = useDarkMode();
export default useDarkMode;
