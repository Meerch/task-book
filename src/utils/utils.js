export default function storage(key, value = false) {
    return value ? localStorage.setItem(key, JSON.stringify(value)) : JSON.parse(localStorage.getItem(key))
}