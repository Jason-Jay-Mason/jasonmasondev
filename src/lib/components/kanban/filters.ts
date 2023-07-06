import type { FilterableData, KanbanFilter, DateRange } from "$lib/types"
import { debounce } from "$lib/utils"

function fuzzyFind(f: KanbanFilter<string>, d: FilterableData[], searchProps: string[]): FilterableData[] {
  const { value } = f

  if (value === '' || value === ' ') {
    return d
  }

  const removedBackslashes = value.replace(/\\/g, "")
  const regex = new RegExp(`(${removedBackslashes})`, "gi")
  return d.filter((data) => {
    for (const prop of searchProps) {
      if (data[prop] && data[prop].search(regex) > -1) return true
    }
  })
}

function contains(f: KanbanFilter<string>, d: FilterableData[]): FilterableData[] {
  const { value, key } = f
  const removedBackslashes = value.replace(/\\/g, "")
  const regex = new RegExp(`(${removedBackslashes})`, "gi")

  return d.filter((data) => data[key].search(regex) > -1)
}

function picklist(f: KanbanFilter<string>, d: FilterableData[]): FilterableData[] | void {
  const { value, key } = f
  if (value.length) {
    return d.filter((data) => {
      if (typeof data[key] === "string") {
        if (data[key] === value) return true
      } else {
        for (const option of data[key]) {
          if (option === value) return true
        }
      }
    })
  }
}

function numberRange(f: KanbanFilter<DateRange>, d: FilterableData[]): FilterableData[] | void {
  const { key } = f
  const { start, end } = f.value
  if (start.length && end.length) {
    const startD = new Date(start)
    const endD = new Date(end)
    d.filter((data) => {
      let dateValue = parseInt(data[key])
      if (dateValue >= startD.getTime() || dateValue <= endD.getTime()) {
        return true
      }
    })
  }
}

export default {
  numberRange,
  fuzzyFind,
  contains,
  picklist
}
