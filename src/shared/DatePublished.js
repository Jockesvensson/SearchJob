export default (value) => {
    const datePublished = new Date(value)
    return datePublished.toLocaleDateString(['sv'], { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' })
}