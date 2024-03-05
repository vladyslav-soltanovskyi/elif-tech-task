export const formatDate = (dateStr: string | Date) => new Date(dateStr)
  .toLocaleDateString('en', {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  })
