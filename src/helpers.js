function choice (items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function remove (items, item) {
    if (!items.includes(item)){
        return
    } else {
        let remaining = items.filter(i => i !== item);
        return remaining
    }
  }

  export {choice, remove}
