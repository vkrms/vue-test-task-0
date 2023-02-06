<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  cursor: pointer;
  border: 2px solid #5863f8;
  background-color: #5863f8;
  border-radius: 4px;
  padding: 8px 16px;
  color: #fff;
  display: inline-block;
  transition: all 0.3s;
}

button:hover {
  opacity: 0.75;
}

.secondary {
  background-color: transparent;
  color: #5863f8;
}
</style>
