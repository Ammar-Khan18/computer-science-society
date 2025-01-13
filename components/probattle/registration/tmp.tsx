const groupByKey = (list, key) => list.reduce((map, obj) => {
    const group = obj[key];
    if (map.has(key)) map.get(group).push(obj);
    else map.set(group, [obj]);
    return map
}, new Map());