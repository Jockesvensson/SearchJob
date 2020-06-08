export default (value) => {
    const dateDeadline = new Date(value)
    return dateDeadline.toLocaleDateString(['sv'], { month: 'long', day: 'numeric' }) //if you want, you can change locale date string
}


// return date.toLocaleDateString(['sv'], { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })