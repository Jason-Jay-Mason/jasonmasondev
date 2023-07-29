import type { FilterableData, KanbanFilter, DateRange } from "$lib/types"

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

  return d.filter((data) => {
    if (data[key] && data[key].search(regex) > -1) {
      return true
    }
  })
}

function picklist(f: KanbanFilter<string>, d: FilterableData[]): FilterableData[] {
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
  return d
}

function dateRange(f: KanbanFilter<DateRange>, d: FilterableData[]): FilterableData[] {
  const { key } = f
  const { start, end } = f.value
  if (start.length && end.length) {
    const startD = new Date(start)
    const endD = new Date(end)
    return d.filter((data) => {
      let dateValue = parseInt(data[key])
      if (dateValue >= startD.getTime() && dateValue <= endD.getTime()) {
        return true
      }
    })
  }
  return d
}

export default {
  dateRange,
  fuzzyFind,
  contains,
  picklist
}
