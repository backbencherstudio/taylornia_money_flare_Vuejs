<script setup lang="ts">
interface ReusableTableColumn {
  label: string;
  key: string;
}

type TableRow = Record<string, any>;

const props = withDefaults(
  defineProps<{
    columns: ReusableTableColumn[];
    data: TableRow[];
    rowKey?: string;
  }>(),
  {
    rowKey: "id",
  },
);

const getRowKey = (row: TableRow, rowIndex: number) => {
  const value = row[props.rowKey];
  return typeof value === "string" || typeof value === "number"
    ? value
    : rowIndex;
};

const displayValue = (value: unknown) => {
  if (value === null || value === undefined || value === "") {
    return "-";
  }
  return String(value);
};
</script>

<template>
  <div class="overflow-x-auto rounded-lg primary-border">
    <table class="w-full min-w-245 border-separate border-spacing-0">
      <thead class="bg-[#1e1e1e]">
        <tr class="text-white">
          <th
            v-for="col in columns"
            :key="col.key"
            class="px-3 py-3 text-left text-sm font-medium text-white"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-if="data.length === 0">
          <td :colspan="columns.length" class="px-3 py-6 text-center text-sm text-[#A0A0A0]">
            <slot name="empty">No data found.</slot>
          </td>
        </tr>

        <tr
          v-for="(row, rowIndex) in data"
          :key="getRowKey(row, rowIndex)"
          class="text-white hover:bg-[#121212]"
        >
          <td
            v-for="col in columns"
            :key="`${col.key}-${rowIndex}`"
            class="px-3 py-4 text-sm"
          >
            <slot
              :name="`cell-${col.key}`"
              :row="row"
              :value="row[col.key]"
              :col="col"
            >
              {{ displayValue(row[col.key]) }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
