<script setup>
const props = defineProps(['filterBy'])
</script>

<template>
  <div class="filters">
    <div>
      <p>Filter by state</p>
      <div class="badges">
        <!-- emit an event and deliever it to the father -->
        <div class="badge" :class="{selected: filterBy === 'todo'}" @click="$emit('emitSetFilterBy', 'todo')">
          To-Do
        </div>
        <div class="badge" :class="{selected: filterBy === 'done'}" @click="$emit('emitSetFilterBy', 'done')">
          Done
        </div>
        <!-- we only see the "clear" only some filter method is selected -->
        <span v-if="filterBy" class="clear" @click="$emit('emitClearFilterby', '')">
          x clear
        </span>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

.filters {
  display: flex;
  flex-direction: column;
  margin: 40px 0;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0em;
    text-align: left;
  }

  .badges {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 14px 0;
    align-items: center;

    .badge {
      padding: 8px 7px;
      background-color: var(--gray-color);
      color: var(--black-color);
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: left;
      border-radius: 8px;
      cursor: pointer;
      user-select: none;

      //this equals to ".badge.selected", which means when both of .badge and ".selected" exist
      &.selected {
          background-color: #E42C5F;
          color: var(--white-color);
      }
    }
  }

  .clear {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0em;
    text-align: left;
    cursor: pointer;
  }

}

</style>