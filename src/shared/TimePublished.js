export default (value) => {
    const timePublished = new Date(value)
    return timePublished.toLocaleDateString(['sv'], { month: 'short', day: '0', hour: '2-digit', minute: '2-digit' })
}